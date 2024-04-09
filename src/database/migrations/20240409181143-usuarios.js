'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false
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
      tableName: 'usuarios', // Define explicitamente o nome da tabela como 'usuarios'
      timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
    });    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');   
  }
};
