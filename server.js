const express = require('express');
const cors = require('cors');

const app = express();

// middlewares

app.use(express.json())

app.use(express.urlencoded({ extended:true }))

// rotas

const router = require('./routes/veiculoRouter.js')
app.use('/api/veiculos', router)

// Definindo a porta
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
console.log (`Server rodando na porta ${PORT}.`);
});