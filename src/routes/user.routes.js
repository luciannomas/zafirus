import {Router} from 'express'
import * as userCtrol from '../controllers/user.controller'
const router = Router()

router.get('/', userCtrol.getUsers)

router.get('/:id',userCtrol.getUsersId)

router.post('/', userCtrol.createUsers)

router.put('/:id', userCtrol.updateUser)

router.delete('/:id', userCtrol.deleteUser)

export default router 