// const cors = require('cors')

const allowedOrigins = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000',
    'http://localhost:3001'
];
  
  function cors(req, res, next) {
      const { origin } = req.headers; 
      if (allowedOrigins.includes(origin)) { 
          res.header('Access-Control-Allow-Origin', origin); 
          res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,PUT,DELETE,OPTIONS');
          res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Authorization');
      }
      
      next(); 
  }
  
  module.exports = cors;

// function corsOptions(req, callback) {
//     let corsOptions;
//     if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
//         corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//     } else {
//         corsOptions = { origin: false } // disable CORS for this request
//     }
//     callback(null, corsOptions) // callback expects two parameters: error and options
// }

// function customCors(req, res, next) {
//     cors(corsOptions)(req, res, next);
// }

// module.exports = customCors;