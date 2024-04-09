'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('ingressos', {
      id_ingresso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'id_evento'
        }
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
      },
      id_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'compras',
          key: 'id_compra'
        }
      },
      data_compra: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      codigo_ingresso: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(10), 
        allowNull: false,
        defaultValue: 'ativo'
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
      tableName: 'ingressos', // Define explicitamente o nome da tabela como 'usuarios'
        timestamps: false // Evita que sejam criados os campos createdAt e updatedAt 
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('ingressos');
    
  }
};
