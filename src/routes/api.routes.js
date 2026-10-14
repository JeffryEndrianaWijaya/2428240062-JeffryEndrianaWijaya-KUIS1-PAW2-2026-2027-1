import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import lapangancontroller from '../controllers/lapangan.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.get('/lapangan', lapangancontroller.index)
router.get('/lapangan', lapangancontroller.index)          
router.get('/lapangan/:id', lapangancontroller.show)       
router.post('/lapangan', lapangancontroller.store)         
router.put('/lapangan/:id', lapangancontroller.update)     
router.delete('/lapangan/:id', lapangancontroller.delete)

export default router

