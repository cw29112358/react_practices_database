const demos = require('../model/demos')
const response = require('../utils/response')

exports.demo = async (ctx, next) => {
    const data = ctx.request.body;
    // const params = ctx.query;
    const demo = new demos(data)
    demo.save(err => {
        if (err) {
            return next(err)
        }
    })
    console.log(22, demo)
  return (ctx.body = response(demo))
}
