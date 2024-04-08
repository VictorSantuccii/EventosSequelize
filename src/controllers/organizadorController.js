const Organizador = require('../models/Organizador');

class OrganizadorController {
  constructor() {}

  async criarOrganizador(req, res) {
    try {
      const novoOrganizador = await Organizador.create(req.body);
      res.status(201).json(novoOrganizador);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodosOrganizadores(req, res) {
    try {
      const organizadores = await Organizador.findAll();
      res.status(200).json(organizadores);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarOrganizadorPorId(req, res) {
    try {
      const organizador = await Organizador.findByPk(req.params.id);
      if (!organizador) {
        return res.status(404).json({ erro: 'Organizador não encontrado' });
      }
      res.status(200).json(organizador);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarOrganizador(req, res) {
    try {
      const organizador = await Organizador.findByPk(req.params.id);
      if (!organizador) {
        return res.status(404).json({ erro: 'Organizador não encontrado' });
      }
      await organizador.update(req.body);
      res.status(200).json(organizador);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirOrganizador(req, res) {
    try {
      const organizador = await Organizador.findByPk(req.params.id);
      if (!organizador) {
        return res.status(404).json({ erro: 'Organizador não encontrado' });
      }
      await organizador.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new OrganizadorController();
