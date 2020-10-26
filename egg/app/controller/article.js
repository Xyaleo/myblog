'use strict';
const Controller = require('egg').Controller;
class ArticleController extends Controller {
    async allarticleFn() {
        const { ctx, service } = this;
        let result = await service.article.goAllarticle();
        ctx.body = result;
    }
    async onearticleFn() {
        const { ctx, service } = this;
        let { aid } = ctx.request.body;

        let result = await service.article.goOnearticle(aid);
        ctx.body = result;
    }
}
module.exports = ArticleController;