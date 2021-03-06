(function() {
  'use strict';
  var Document = require('../controllers/docs');

  module.exports = function(app, express) {
    var api = express.Router();

    //api.use(Users.getToken);
    api.post('/document', Document.create);
    api.get('/document', Document.getAllDocuments);
    api.get('/role/document', Document.getAllDocumentsByRole);
    api.get('/document/date', Document.getAllDocumentsByDate);
    api.get('/document/category', Document.getDocumenstByCategory);
    api.get('/document/:_id', Document.findOne);
    api.put('/document/:_id', Document.update);
    api.put('/document/contributors/:_id', Document.addContributors);
    api.delete('/document/:_id', Document.delete);

    api.get('/users/documents/:userId', Document.getAllById);

    app.use('/api', api);
  };
})();
