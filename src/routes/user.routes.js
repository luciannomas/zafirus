import {Router} from 'express'
import * as userCtrol from '../controllers/user.controller'
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads' })

const router = Router()

router.post('/', userCtrol.uploadoImage)

router.get('/', userCtrol.getUsers)

router.get('/:id',userCtrol.getUsersId)

/* router.post('/', userCtrol.createUsers) */

router.put('/:id', userCtrol.updateUser)

router.delete('/:id', userCtrol.deleteUser)

export default router 