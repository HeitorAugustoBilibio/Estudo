import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maysa',
      sobrenome: 'Vidi',
      email: 'maysavidi@gmail.com',
      idade: 17,
      peso: 54,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
