const Sequelize = require('sequelize');

class Ingresso extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      idIngresso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idEvento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'idEvento'
        }
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
      codigoIngresso: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'ativo'
      }
    }, {
      sequelize,

    });

    return this;
  }
}

module.exports = Ingresso;
