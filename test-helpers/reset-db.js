const fs = require('fs');
const path = require('path');

const isCypress = typeof cy !== 'undefined';

exports.resetDB = function () {
  let seedFile = '/Users/b002631/Desktop/study/javascript-practices/server/db.seed.json';
  let dbFile = '/Users/b002631/Desktop/study/javascript-practices/server/db.json';

  if (fs.copyFile) {
    seedFile = path.resolve(seedFile);
    dbFile = path.resolve(dbFile);

    fs.copyFile(seedFile, dbFile, err => {
      if (err) throw err;
    });
  }

  // cypress
  if (isCypress) {
    cy.readFile(seedFile, 'utf8').then(content =>
      cy.writeFile(dbFile, content)
    );
  }
}

if (!module.parent && !isCypress) {
  exports.resetDB();
}
