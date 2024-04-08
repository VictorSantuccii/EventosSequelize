const router = require('express').Router()


// Importação das Controllers
const eventoController = require('../controllers/eventoController');
const compraController = require('../controllers/compraController');
const ingressoController = require('../controllers/ingressoController');
const organizadorController = require('../controllers/organizadorController');
const usuarioController = require('../controllers/usuarioController');

// Rotas para Eventos
router.get('/eventos', eventoController.buscarTodosEventos);
router.get('/eventos/:id', eventoController.buscarEventoPorId);
router.post('/eventos', eventoController.criarEvento);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.excluirEvento);

// Rotas para Compras
router.get('/compras', compraController.buscarTodasCompras);
router.get('/compras/:id', compraController.buscarCompraPorId);
router.post('/compras', compraController.criarCompra);
router.put('/compras/:id', compraController.atualizarCompra);
router.delete('/compras/:id', compraController.excluirCompra);

// Rotas para Ingressos
router.get('/ingressos', ingressoController.buscarTodosIngressos);
router.get('/ingressos/:id', ingressoController.buscarIngressoPorId);
router.post('/ingressos', ingressoController.criarIngresso);
router.put('/ingressos/:id', ingressoController.atualizarIngresso);
router.delete('/ingressos/:id', ingressoController.excluirIngresso);

// Rotas para Organizadores
router.get('/organizadores', organizadorController.buscarTodosOrganizadores);
router.get('/organizadores/:id', organizadorController.buscarOrganizadorPorId);
router.post('/organizadores', organizadorController.criarOrganizador);
router.put('/organizadores/:id', organizadorController.atualizarOrganizador);
router.delete('/organizadores/:id', organizadorController.excluirOrganizador);


// Rotas para Usuários
router.get('/usuarios', usuarioController.buscarTodosUsuarios);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);
router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);




module.exports = router