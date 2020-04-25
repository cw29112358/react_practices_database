const Router = require('koa-router')
const router = new Router()
const demoController = require('../controllers/demoController')

router.get('/', demoController.demo)

module.exports = router.routes()
