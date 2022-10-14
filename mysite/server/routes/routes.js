const { Router } = require('express')

const controller = require('../controller/controller');

const router = Router()

router.post('/signup', controller.sigupHandler)
router.post('/signin', controller.signinHandeler)
router.get('/logout',controller.logoutHandler)

module.exports = router