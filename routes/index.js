const Router = require('koa-router')

const userRouter = require('./user')
const profilesRouter = require('./profiles')
const demoRouter = require('./demo')

const router = new Router({
    prefix: '/api',
})

router.use('/auth', userRouter)
router.use('/profiles', profilesRouter)
router.use('/demo', demoRouter)

module.exports = router
