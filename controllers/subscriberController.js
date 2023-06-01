const SubscriberModel = require('../models/subscriberModel');

class SubscriberController {
    async criar(req, res) {
        const { codigo, nome, sobrenome, dataNascimento, telefone, endereco, cidade, estado, status, fotoPerfil } = req.body;
        try {
            const novoAssinante = await SubscriberModel.create({
                codigo,
                nome,
                sobrenome,
                dataNascimento,
                telefone,
                endereco,
                cidade,
                estado,
                status,
                fotoPerfil
            });
            res.status(201).json(novoAssinante);
        } catch (error) {
            res.status(500).json({ error: 'Falha ao criar um novo assinante' });
        }
    }


    async editarInformacoes(req, res) {
        const { codigo } = req.params;
        const { nome, sobrenome, status, fotoPerfil } = req.body;
        try {
            const subscriber = await SubscriberModel.findOneAndUpdate(
                { codigo },
                { nome, sobrenome, status, fotoPerfil }
            );
            res.status(200).json(subscriber);
        } catch (error) {
            res.status(500).json({ error: 'Falha ao editar informações do assinante' });
        }
    }

    async listarTodos(req, res) {
        try {
            const subscribers = await SubscriberModel.find({});
            res.status(200).json(subscribers);
        } catch (error) {
            res.status(500).json({ error: 'Falha ao listar os assinantes' });
        }
    }

    async listarPorCodigo(req, res) {
        const { codigo } = req.params;
        try {
            const subscriber = await SubscriberModel.findOne({ codigo });
            if (subscriber) {
                res.status(200).json(subscriber);
            } else {
                res.status(404).json({ message: 'Assinante não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Falha ao buscar o assinante por código' });
        }
    }

    async listarPorFiltro(req, res) {
        const { nome, sobrenome, cidade, estado, status } = req.query;
        const filters = {};
        if (nome) filters.nome = nome;
        if (sobrenome) filters.sobrenome = sobrenome;
        if (cidade) filters.cidade = cidade;
        if (estado) filters.estado = estado;
        if (status) filters.status = status;
        try {
            const subscribers = await SubscriberModel.find(filters);
            res.status(200).json(subscribers);
        } catch (error) {
            res.status(500).json({ error: 'Falha ao listar os assinantes por filtro' });
        }
    }

    async deletar(req, res) {
        const { codigo } = req.params;
        try {
            await SubscriberModel.findOneAndDelete({ codigo });
            res.status(200).json({ message: 'Assinante deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Falha ao deletar o assinante' });
        }
    }
}

module.exports = new SubscriberController();
