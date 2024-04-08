const Ingresso = require('../models/Ingresso');

class IngressoController {
  constructor() {}

  async criarIngresso(req, res) {
    try {
      const novoIngresso = await Ingresso.create(req.body);
      res.status(201).json(novoIngresso);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodosIngressos(req, res) {
    try {
      const ingressos = await Ingresso.findAll();
      res.status(200).json(ingressos);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarIngressoPorId(req, res) {
    try {
      const ingresso = await Ingresso.findByPk(req.params.id);
      if (!ingresso) {
        return res.status(404).json({ erro: 'Ingresso não encontrado' });
      }
      res.status(200).json(ingresso);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarIngresso(req, res) {
    try {
      const ingresso = await Ingresso.findByPk(req.params.id);
      if (!ingresso) {
        return res.status(404).json({ erro: 'Ingresso não encontrado' });
      }
      await ingresso.update(req.body);
      res.status(200).json(ingresso);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirIngresso(req, res) {
    try {
      const ingresso = await Ingresso.findByPk(req.params.id);
      if (!ingresso) {
        return res.status(404).json({ erro: 'Ingresso não encontrado' });
      }
      await ingresso.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new IngressoController();
