const testng = require('./testng');
const junit = require('./junit');
const xunit = require('./xunit');
const mocha = require('./mocha');
const cucumberjs = require('./cucumberjs');

function parse(options) {
  switch (options.type) {
    case 'testng':
      return testng.parse(options);
    case 'junit':
      return junit.parse(options);
    case 'xunit':
      return xunit.parse(options);
    case 'mocha':
        return mocha.parse(options);
    case 'cucumberjs':
          return cucumberjs.parse(options);
    default:
      throw `UnSupported Result Type - ${options.type}`;
  }
}

module.exports = {
  parse
}