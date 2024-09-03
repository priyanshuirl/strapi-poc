// ./config/plugins.js
'use strict';

module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::home.home',
          published: {
            url: 'https://calyx-strapi-poc.netlify.app',
          },
        },
        {
          uid: 'api::page.page',
          draft: {
            url: 'https://calyx-strapi-poc.netlify.app/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://calyx-strapi-poc.netlify.app/{slug}',
          },
        },
        {
          uid: 'api::post.post',
          draft: {
            url: 'https://calyx-strapi-poc.netlify.app/api/preview',
            query: {
              type: 'post',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://calyx-strapi-poc.netlify.app/blog/{slug}',
          },
        },
        {
            uid: 'api::blog-post.blog-post',
            draft: {
              url: 'https://calyx-strapi-poc.netlify.app/blog/preview/{id}',
            },
            published: {
              url: 'https://calyx-strapi-poc.netlify.app/blog/{id}',
            },
          },
      ],
    },
  },
};