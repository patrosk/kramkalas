module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      name: {
        type: 'string',
        label: 'Full Name',
        required: true,
        options: {
          widgets: {
            'apostrophecms/rich-text': {}
          }
        }
      },
      bio: {
        type: 'string',
        label: 'Biography',
        required: true,
        textarea: true
      },
      image: {
        label: 'Photo',
        type: 'area',
        required: true,
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      email: {
        type: 'string',
        label: 'Email Address',
        required: true
      },
      phone: {
        type: 'string',
        label: 'Phone number',
        required: true
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'name',
          'bio',
          'image',
          'email',
          'phone'
        ]
      }
    }
  }
};
