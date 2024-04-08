'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('eventos', {
      idEvento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false
      },
      local: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      quantidadeIngressos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorIngresso: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      idOrganizador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'organizador',
          key: 'idOrganizador'
        }
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('evento');
     
  }
};