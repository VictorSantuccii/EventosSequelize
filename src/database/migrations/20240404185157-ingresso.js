'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('ingresso', {
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
        allowNull: false
      },
      codigoIngresso: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(10), 
        allowNull: false,
        defaultValue: 'ativo'
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('ingresso');
    
  }
};
