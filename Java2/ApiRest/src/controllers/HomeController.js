import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Moro',
      email: 'mariamoro@gmail.com',
      idade: 18,
      peso: 57,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
