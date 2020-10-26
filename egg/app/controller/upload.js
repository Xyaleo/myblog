'use strict';
const Controller = require('egg').Controller;
class UploadController extends Controller {
    async uploadFn() {
        const { ctx, service } = this;
        let { uname, title, text, date, time } = ctx.request.body;
        let result = await service.upload.goupload(uname, title, text, date, time);
        ctx.body = result;
    }
}
module.exports = UploadController;