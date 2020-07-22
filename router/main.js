const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const mainController = require('../controller/main')

router.get('/',mainController.getMain)
router.post('/',body('nome').isLength({min:2}).withMessage('Nome inválido!')
                ,body('email','E-mail inválido!').isEmail().isLength({min:2})
                ,body('numero','Numero inválido!').isLength({min:8}),mainController.postMain)



module.exports = router