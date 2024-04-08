const Compra = require('../models/Compra');

class CompraController {
  constructor() {}

  async criarCompra(req, res) {
    try {
      const novaCompra = await Compra.create(req.body);
      res.status(201).json(novaCompra);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodasCompras(req, res) {
    try {
      const compras = await Compra.findAll();
      res.status(200).json(compras);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarCompraPorId(req, res) {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ erro: 'Compra não encontrada' });
      }
      res.status(200).json(compra);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarCompra(req, res) {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ erro: 'Compra não encontrada' });
      }
      await compra.update(req.body);
      res.status(200).json(compra);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirCompra(req, res) {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ erro: 'Compra não encontrada' });
      }
      await compra.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new CompraController();
