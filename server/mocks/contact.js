module.exports = function(app) {
  var express = require('express');
  var contactRouter = express.Router();
  var bodyParser = require('body-parser');

  var received = [];

  app.use(bodyParser.json());

  contactRouter.get('/', function(req, res) {
    res.send({
      'contact': []
    });
  });

  contactRouter.post('/', function(req, res) {
    var body = req.body;
    if (!body) {
      console.log('Nothing was received.');
    }
    if (body) {
      received.push(body);
      console.log('Submission was recieved from ' + body.name + ' with ' + body.message);
    }
    res.status(201).end();
  });

  contactRouter.get('/:id', function(req, res) {
    res.send({
      'contact': {
        id: req.params.id
      }
    });
  });

  contactRouter.put('/:id', function(req, res) {
    res.send({
      'contact': {
        id: req.params.id
      }
    });
  });

  contactRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/contact', contactRouter);
};
