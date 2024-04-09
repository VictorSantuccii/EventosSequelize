'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id_compra: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
      },
      data_compra: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      valor_total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      forma_pagamento: {
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
      
        tableName: 'compras', // Define explicitamente o nome da tabela como 'usuarios'
        timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
       
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('compras');
     
  }
};
