'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('eventos', {
      id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      data_hora: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING(18),
        allowNull: false,
        unique: true
      },
      quantidade_ingressos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor_ingresso: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      id_organizador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'organizadores',
          key: 'id_organizador'
        }
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false
       }
    },
    {
      tableName: 'eventos', // Define explicitamente o nome da tabela como 'usuarios'
        timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('eventos');
     
  }
};