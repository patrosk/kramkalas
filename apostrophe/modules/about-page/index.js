module.exports = {
  extend: '@apostrophecms/page-type',
  fields: {
    add: {
      h1: {
        type: 'string',
        label: 'h1 goes here',
        required: true
      },
      hero_description: {
        type: 'area',
        label: 'Hero text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      h2_1: {
        type: 'string',
        label: 'h2 goes here'
      },
      h2_2: {
        type: 'string',
        label: 'h2 goes here'
      }
    },
    group: {
      aboutFields: {
        label: 'About-fields',
        fields: [
          'title',
          'h1',
          'hero_description',
          'h2_1',
          'h2_2'
        ]
      }
    }
  }
};
