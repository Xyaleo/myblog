'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/goLogin', controller.login.loginFn);
  router.post('/goRegistry', controller.registry.registryFn);
  router.post('/goUpload', controller.upload.uploadFn);
  router.post('/goArticle/all', controller.article.allarticleFn);
  router.post('/goArticle/one', controller.article.onearticleFn);
};
