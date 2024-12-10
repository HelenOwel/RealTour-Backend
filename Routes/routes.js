import express from 'express'
import { form } from '../Controller/Form.js'
import { getNewsLetter } from '../Controller/NewsLetter.js'
import { signIn, signUp } from '../Controller/User.js'
const router = express.Router()

router.post('/newsLetter', getNewsLetter)
router.post('/form', form)
router.post('/signup', signUp)
router.post('/signin', signIn)


export default router;