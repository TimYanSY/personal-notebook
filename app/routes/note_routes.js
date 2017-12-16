// note_routes.js
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

  app.get('/notes/:author', (req, res) => {
    const details = {'author': req.params.author };
    db.collection('notes').find(details).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    })
  });

  app.post('/notes', (req, res) => {
    const note = { text: req.body.text, author: req.body.author, time: req.body.time };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.text, author: req.body.author, time : req.body.time };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

};
