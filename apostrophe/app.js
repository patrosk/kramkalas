require('apostrophe')({
  shortName: 'apostrophe',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/express': {},

    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },

    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    'about-page': {
      extend: '@apostrophecms/page-type',
      options: {
        label: 'About-page'
      }
    },
    'contact-page': {},
    // apostrophe headless to connect apostrophe to nuxt
    'apostrophe-pieces-export': {},
    // 'apostrophe-headless': {},

    people: {
      extend: '@apostrophecms/piece-type',
      options: {
        restApi: true,
        export: true,
        label: 'Person',
        pluralLabel: 'People',
        publicApiProjection: {
          title: 1,
          slug: 1,
          _url: 1,
          _author: 1,
          main: 1,
          thumbnail: 1
        }
      }
    }

  }
});
