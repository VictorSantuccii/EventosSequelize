'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('usuario', { 
      id : Sequelize.INTEGER 
    
    });
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuario');
     
  }
};
