const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Organizadores extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id_organizador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255] // Validação simples de comprimento
        }
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      senha: {        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          len: [8, 255], 
          containsAtLeastOneNumber(value) {
            if (!/\d/.test(value)) { 
              throw new Error('A senha deve conter pelo menos um número.');
            }
          },
          containsAtLeastOneUpperCaseLetter(value) {
            if (!/[A-Z]/.test(value)) { 
              throw new Error('A senha deve conter pelo menos uma letra maiúscula.');
            }
          },
          containsAtLeastOneLowerCaseLetter(value) {
            if (!/[a-z]/.test(value)) { 
              throw new Error('A senha deve conter pelo menos uma letra minúscula.');
            }
          }
        }
      },
    }, {
      sequelize,
      hooks: {
        beforeCreate: (organizador) => {
          const salt = bcrypt.genSaltSync();
          organizador.senha = bcrypt.hashSync(organizador.senha, salt);
        },
        beforeUpdate: async (organizador) => {
          if (organizador.changed('senha')) { 
            const salt = bcrypt.genSaltSync();
            organizador.senha = await bcrypt.hash(organizador.senha, salt);
          }
        }
      },
      options: {
          freezeTableName: true // Evita a pluralização do nome da tabela
        }
    });

    return this;
  }

  async verificarSenha(senhaInformada) {
    return await bcrypt.compare(senhaInformada, this.senha);
  }
}

module.exports = Organizadores;
