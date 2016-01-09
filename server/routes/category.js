(function() {
  'use strict';

  var Category = require('../controllers/category');

  module.exports = function(app, express) {
    var api = express.Router();

    api.post('/category', Category.create);
    api.get('/category', Category.getAllCategories);

    app.use('/api', api);
  };
})();