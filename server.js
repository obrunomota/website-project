const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve todos os arquivos estáticos da pasta public/
app.use(express.static(path.join(__dirname, 'public')));

// Rota fallback: qualquer URL desconhecida retorna a home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
