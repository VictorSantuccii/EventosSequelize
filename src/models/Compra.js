const Sequelize = require('sequelize');

class Compra extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      idCompra: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'idUsuario'
        }
      },
      dataCompra: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      valorTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      formaPagamento: {
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
