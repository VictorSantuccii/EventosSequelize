const Localizacao = require('../models/Localizacao'); // Verifique se o caminho para o model está correto

class LocalizacaoController {
  constructor() {}

  async criarLocalizacao(req, res) {
    try {
      const novaLocalizacao = await Localizacao.create(req.body);
      res.status(201).json(novaLocalizacao);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async buscarTodasLocalizacoes(req, res) { // Mude o nome do método para ser mais específico
    try {
      const localizacoes = await Localizacao.findAll();
      res.status(200).json(localizacoes);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarLocalizacaoPorId(req, res) {
    try {
      const localizacao = await Localizacao.findByPk(req.params.id);
      if (!localizacao) {
        return res.status(404).json({ erro: 'Localização não encontrada' }); // Melhore a mensagem de erro
      }
      res.status(200).json(localizacao);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async atualizarLocalizacao(req, res) {
    try {
      const localizacao = await Localizacao.findByPk(req.params.id);
      if (!localizacao) {
        return res.status(404).json({ erro: 'Localização não encontrada' }); // Melhore a mensagem de erro
      }
      await localizacao.update(req.body);
      res.status(200).json(localizacao);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirLocalizacao(req, res) {
    try {
      const localizacao = await Localizacao.findByPk(req.params.id);
      if (!localizacao) {
        return res.status(404).json({ erro: 'Localização não encontrada' }); // Melhore a mensagem de erro
      }
      await localizacao.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = new LocalizacaoController();
