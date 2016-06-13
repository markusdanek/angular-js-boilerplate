var users = [
  {
    id: 1,
    firstName: 'Markus',
    lastName: 'Danek',
    email: 'markus@creativebrains.net',
    created: 1439296048339,
    modified: 1439296048339,
  }
];

module.exports = function (app) {
  app.createCRUD('users', users);
};
