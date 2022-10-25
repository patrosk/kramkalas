module.exports = {
  options: {
    session: {
      // If this still says `undefined`, set a real secret!
      secret: 'secret'
    },
    apiKeys: {
      // Use your own key value. Ideally use a strong, randomly generated
      // key.
      myapikey1029384756: {
        // The user role associated with this key
        role: 'admin'
      }
    }
  }
};
