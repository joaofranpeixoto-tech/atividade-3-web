const express = require('express');
const app = express();

// Permite receber JSON no body
app.use(express.json());

// ================================
// ROTA TESTE
// ================================
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// ================================
// ROTAS DE TEMA
// ================================

// Listar temas
app.get('/tema', (req, res) => {
    res.json([
        { id: 1, nome: 'Tema 1' },
        { id: 2, nome: 'Tema 2' }
    ]);
});

// Criar tema
app.post('/tema', (req, res) => {
    const novoTema = req.body;
    res.status(201).json({
        message: 'Tema criado com sucesso',
        nome: novoTema.nome
    });
});

// Atualizar tema
app.put('/tema/:id', (req, res) => {
    const id = req.params.id;
    const temaAtualizado = req.body;

    res.json({
        message: 'Tema atualizado',
        id,
        nome: temaAtualizado.nome
    });
});

// Excluir tema
app.delete('/tema/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Tema com ID ${id} excluído`
    });
});

// ================================
// ROTAS DE CATEGORIAS DO TEMA
// ================================

// Listar categorias de um tema
app.get('/tema/:id/categorias', (req, res) => {
    const idTema = req.params.id;

    res.json([
        { id: 1, nome: 'Categoria 1', temaId: idTema },
        { id: 2, nome: 'Categoria 2', temaId: idTema }
    ]);
});

// Criar categoria em um tema
app.post('/tema/:id/categorias', (req, res) => {
    const idTema = req.params.id;
    const novaCategoria = req.body;

    res.status(201).json({
        message: 'Categoria criada com sucesso',
        temaId: idTema,
        nome: novaCategoria.nome
    });
});

// Atualizar categoria
app.put('/tema/:id/categorias/:categoriaId', (req, res) => {
    const idTema = req.params.id;
    const categoriaId = req.params.categoriaId;
    const categoriaAtualizada = req.body;

    res.json({
        message: 'Categoria atualizada',
        temaId: idTema,
        categoriaId,
        nome: categoriaAtualizada.nome
    });
});

// Excluir categoria
app.delete('/tema/:id/categorias/:categoriaId', (req, res) => {
    const idTema = req.params.id;
    const categoriaId = req.params.categoriaId;

    res.json({
        message: `Categoria ${categoriaId} do tema ${idTema} excluída`
    });
});

// ================================
// INICIAR SERVIDOR
// ================================
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});