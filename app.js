require('./database/mongodb');
const express = require('express');
const mongoose = require('mongoose');
const subscriberRouter = require('./routers/subscriberRouter')

const app = express();
const PORT = 3000; // Porta em que o servidor será executado


// Middlewares
app.use(express.json());

// Rotas
app.use(subscriberRouter);
app.use('/assinantes', subscriberRouter);
// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});