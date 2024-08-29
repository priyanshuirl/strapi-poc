'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-ckeditor')
      .service('myService')
      .getWelcomeMessage();
  },
});
