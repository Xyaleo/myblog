'use strict';
const Controller = require('egg').Controller;
class LogoutController extends Controller {
    async logoutFn() {
        const { ctx, service } = this;
        ctx.cookies.set('username',null);
        // 重定向
        ctx.body = {
            sta:'no',
            ur:'/login'
        }
    }
}
module.exports = LogoutController;
