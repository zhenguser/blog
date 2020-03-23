const frontend = require('./frontend/index.js');
const development = require('./development/index.js');
const designPattern = require('./designPattern/index.js');
const java = require('./java/index.js');
const algorithm = require('./algorithm/index.js');
const framework = require('./framework/index.js');
const network= require('./network/index.js');
const more = require('./more/index.js');
const about = require('./about/index.js');



module.exports = {

  '/frontend/': frontend, 

  '/java/': java,

  '/algorithm/': algorithm,

  '/network/': network,
  
  '/development/': development,

  '/more/': more,

  '/about/': about,

  // fallback
  '/': [
    '',    
    '/about/',
    '/about/about1',
  ]
};