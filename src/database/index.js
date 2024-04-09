const sequelize = require('sequelize');
const databaseConfig = require('../config/database');

 const Compra = require('../models/Compra')
 const Evento = require('../models/Evento')
 const Ingresso = require('../models/Ingresso')
 const Organizador = require('../models/Organizador')
 const Usuario = require('../models/Usuario')
 const Localizacao = require('../models/Localizacao')

 const models = [Compra, Evento, Ingresso, Organizador, Usuario, Localizacao];

const connection = new sequelize.Sequelize(databaseConfig);

models.forEach(model => model.init(connection))