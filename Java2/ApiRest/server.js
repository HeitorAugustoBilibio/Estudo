import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Control + click em http://localhost:${port}`);
});
