import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middleware/loginRequired';

const router = new Router();

// Não Deveria existir
router.get('/', loginRequired, userController.index); // Lista Usuario
router.get('/:id', userController.show);// Lista Usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
 index -> Lista todos os usuarios -> GET
 store/create -> cria um novo usuario -> POST
 delete -> apaga um usuario -> DELETE
 show -> mostra um usuario -> GET
 update -> atualiza um usuario -> PATCH ou PUT
*/
