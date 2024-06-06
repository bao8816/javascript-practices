Cypress.Commands.add('resetDB', () => {
  const { resetDB } = require('../../test-helpers/reset-db');
  resetDB();
});
