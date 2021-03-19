module.exports = (options, app) => {
    return async function init(ctx, next) {

        //判断前台用户是否登录   如果登录可以进入 （ 去结算  用户中心）    如果没有登录直接跳转到登录

        var userinfo = ctx.cookies.get('username', {
            encrypt: true
        });

        if (userinfo) {
             await next();
        } else {
            ctx.body = {
                sta:'no',
                ur:'/login'
            }
        }
    };
};