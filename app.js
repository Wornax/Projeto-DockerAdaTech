const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Projeto final Docker Ada Tech DevOps\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
