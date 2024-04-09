const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Localizacoes extends Sequelize.Model {
   
    static init(sequelize) { 
      super.init({
        id_localizacao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(30),
          allowNull: false,
          validate: {
            len: [1, 30] 
          }
        },
        logradouro: {
          type: Sequelize.STRING(255),
          allowNull: false,
          validate: {
            len: [1, 255] 
          }
        },
        cidade: {
          type: Sequelize.STRING(100),
          allowNull: false,
          validate: {
            len: [1, 100] 
          }
        },
        estado: {
          type: Sequelize.STRING(2),
          allowNull: false,
          validate: {
            len: {
              args: [2], 
              msg: "O estado deve ter 2 caracteres"
            }
          }
        },
        cep: {
          type: Sequelize.STRING(10),
          allowNull: false,

        },
        id_evento: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'eventos',
            key: 'id_evento'
          }
        }
      }, {
        sequelize,
      });
  
      return this;
    }
  }
  module.exports = Localizacoes;