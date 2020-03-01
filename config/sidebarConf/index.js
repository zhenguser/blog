const development = require('./development/index.js');
const designPattern = require('./designPattern/index.js');
const structuure = require('./structure/index.js');
const algorithm = require('./algorithm/index.js');
const framework = require('./framework/index.js');
const about = require('./about/index.js');
const test = require('./more/test/index.js');
const database = require('./more/database/index.js');
const network= require('./network/index.js');



module.exports = {

  '/designPattern/': designPattern,

  '/structure/': structuure,

  '/algorithm/': algorithm,

  '/framework/': framework,

  '/network/': network,
  
  '/development/': development,

  '/more/database/': database,

  '/more/test/':test,

  '/about/': about,

  // fallback
  '/': [
    '',    
    // '/about/',
    // '/about/test',
  ]
};