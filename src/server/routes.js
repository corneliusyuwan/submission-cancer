const postPredictHandler = require('../server/handler');
const getdataHistories = require('../services/getHistories');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 1000000,
        allow: 'multipart/form-data',
        multipart: true,
      },
    },
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: getdataHistories,
  },
];

module.exports = routes;
