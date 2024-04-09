const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Evento extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255]
        }
      },
      data_hora: { 
        type: Sequelize.DATE,
        allowNull: false,

      },
      cnpj: {
        type: Sequelize.STRING(18),
        allowNull: false,
        unique: true,
        validate: {
            isCNPJValid(value) {
              if (!/^\d{14}$/.test(value)) {
                throw new Error('CNPJ inválido: formato incorreto.');
              }
           }
        }    
      },
      quantidade_ingressos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      valor_ingresso: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      id_organizador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'organizadores', 
          key: 'id_organizador'
        }
      }
    }, {
      sequelize,
    });

    return this;
  }
}

module.exports = Evento;
