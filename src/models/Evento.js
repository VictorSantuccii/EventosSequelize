const Sequelize = require('sequelize');

class Evento extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      idEvento: {
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
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isAfter: new Date()
        }
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
          isBetween: ['00:00', '23:59']
        }
      },
      local: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      quantidadeIngressos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      valorIngresso: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      idOrganizador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'organizador',
          key: 'idOrganizador'
        }
      }
    }, {
      sequelize,

    });

    return this;
  }
}

module.exports = Evento;
