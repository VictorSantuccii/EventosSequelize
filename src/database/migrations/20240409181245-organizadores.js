'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('organizadores', {
      id_organizador: {
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
      tableName: 'organizadores', // Define explicitamente o nome da tabela como 'usuarios'
      timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
    });
    

   },    

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('organizadores');
     
  }
};
