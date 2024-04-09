const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class Usuario extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255],
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
      senha: {
        type: Sequelize.STRING(255),
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
      cpf: {
        type: Sequelize.STRING(11), 
        allowNull: false,
        unique: true,
        validate: {
          is: /^\d{11}$/
        }
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      
    }, {
      sequelize,
      hooks: {
        beforeCreate: (usuario) => {
          const salt = bcrypt.genSaltSync();
          usuario.senha = bcrypt.hashSync(usuario.senha, salt);
        },
        beforeUpdate: async (usuario) => {
          if (usuario.changed('senha')) { 
            const salt = bcrypt.genSaltSync();
            usuario.senha = await bcrypt.hash(usuario.senha, salt);
          }
        }
      },
    });

    return this;
  }

  async verificarSenha(senhaInformada) {
    return await bcrypt.compare(senhaInformada, this.senha);
  }
}

module.exports = Usuario;
