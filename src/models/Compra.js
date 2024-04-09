const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Compra extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id_compra: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
      },
      data_compra: {
        type: Sequelize.DATEONLY,
        allowNull: false,

      },
      valor_total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      forma_pagamento: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          isIn: [['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']]
        }
      }
      
    }, {
      sequelize,

    });

    return this;
  }
}

module.exports = Compra;
