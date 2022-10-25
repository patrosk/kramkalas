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
      hero_contact_text: {
        type: 'area',
        label: 'Hero contact text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      hero_contact_email: {
        type: 'string',
        label: 'Company email'
      },
      contact_info: {
        label: 'Contact info',
        type: 'array',
        fields: {
          add: {
            name: {
              type: 'string',
              label: 'Full Name'
            },
            email: {
              type: 'string',
              label: 'Email address'
            },
            phone: {
              type: 'string',
              label: 'Phone number'
            },
            photo: {
              label: 'Photo',
              type: 'area',
              required: true,
              options: {
                max: 1,
                widgets: {
                  '@apostrophecms/image': {}
                }
              }
            }
          }
        }
      }
    },
    group: {
      contactFields: {
        label: 'Contact-fields',
        fields: [
          'title',
          'h1',
          'hero_description',
          'hero_contact_text',
          'hero_contact_email',
          'contact_info'
        ]
      }
    }
  }
};
