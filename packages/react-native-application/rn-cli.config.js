const path = require('path');

const config = {
  getProjectRoots() {
    return [
      // Resolves the project directory.
      path.resolve(__dirname),

      // Resolves the monorepo's base folder
      path.resolve(__dirname, '../..'),
    ];
  },
};

module.exports = config;
