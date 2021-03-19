'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  var userauthMiddleware = app.middleware.userauth({}, app);
  router.get('/', controller.home.index);
  router.post('/goLogin', controller.login.loginFn);
  router.get('/goLogout', userauthMiddleware, controller.logout.logoutFn);
  router.post('/goRegistry', controller.registry.registryFn);
  router.post('/goUpload', userauthMiddleware,controller.upload.uploadFn);
  router.post('/goArticle/all', userauthMiddleware,controller.article.allarticleFn);
  router.post('/goArticle/one', userauthMiddleware,controller.article.onearticleFn);
};
