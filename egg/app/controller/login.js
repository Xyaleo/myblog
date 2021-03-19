'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    async loginFn() {
        const { ctx, service } = this;
        let { user, pwd } = ctx.request.body;
        let result = await service.login.gologin(user, pwd);
        if(result.code ===1) {
            this.ctx.cookies.set("username", user, {
                // 设置cookie的有效期
                maxAge: 1000 * 3600 * 24,
                // 只允许服务端访问cookie
                httpOnly: true,
                // 对cookie进行签名，防止用户修改cookie
                signed: true,
                // 是否对cookie进行加密
                // cookie加密后获取的时候要对cookie进行解密
                // cookie加密后就可以设置中文cookie
                encrypt: true
            })
        }

        ctx.body = result;
    }
}
module.exports = LoginController;
