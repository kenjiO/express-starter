/* The API controller
   Exports 3 methods:
   * newThread - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/

var Thread = require('../models/thread.js');
var Post = require('../models/post.js');

exports.list = function(req, res, next) {
    
  //console.dir = require('cdir');
  console.dir(req.query, {color: true});
    
  Thread.find(function(err, threads) {
    if (err) return next(err);
    if (threads.length === 0 ) return next(new Error("No records found"));
    res.send(threads);
  });
};

exports.show = function(req, res) {
    if (!req.params.title) res.send('req.params.title not set<br /> req.params: ' + JSON.stringify(req.params));

    Thread.findOne({title: req.params.title}, function(error, thread) {
        if (thread && thread.id) {
          Post.find({thread: thread._id}, function(error, posts) {
            res.send([{thread: thread, posts: posts}]);
          });
        } else {
            res.send('thread not found.<br /> req.params: ' + JSON.stringify(req.params));
        }
    });
};


exports.newThread = function(req, res) {
    //new Thread({title: req.body.title, author: req.body.author}).save();
    new Thread({title: "X223", author: "Y23"}).save();
    res.send('new thread saved');
};
