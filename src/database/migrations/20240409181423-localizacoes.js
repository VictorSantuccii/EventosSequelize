'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('localizacoes', {
      id_localizacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos', 
          key: 'id_evento'   
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
      tableName: 'localizacoes', // Define explicitamente o nome da tabela como 'usuarios'
        timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('localizacoes');
  }
};
