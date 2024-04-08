const Evento = require('../models/Evento');

class EventoController {
  constructor() {}

  async criarEvento(req, res) {
    try {
      const novoEvento = await Evento.create(req.body);
      res.status(201).json(novoEvento);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodosEventos(req, res) {
    try {
      const eventos = await Evento.findAll();
      res.status(200).json(eventos);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarEventoPorId(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      res.status(200).json(evento);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarEvento(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      await evento.update(req.body);
      res.status(200).json(evento);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirEvento(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      await evento.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new EventoController();
