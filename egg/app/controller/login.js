'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    async loginFn() {
        const { ctx, service } = this;
        let { user, pwd } = ctx.request.body;
        let result = await service.login.gologin(user, pwd);
        ctx.body = result;
    }
}
module.exports = LoginController;
