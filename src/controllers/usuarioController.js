const Usuario = require('../models/Usuario');

class UsuarioController {
  constructor() {}

  async criarUsuario(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodosUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarUsuarioPorId(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarUsuario(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
      await usuario.update(req.body);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirUsuario(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
      await usuario.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new UsuarioController();
