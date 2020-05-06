var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Steve' });
});

module.exports = router;

router.get('/test', function(req, res, next) {
  res.send('Message Test');
});

router.get('/post', function(req, res, next) {
  app.use('/public', express.static('public'));
  res.render('post', 
             {title:'Blog Title',
              tagline: 'Blog Tagline',
              recent_posts: ['post1','post2','post3'],
              post_title: 'Post Title',
              post_subtitle: 'Post Subtitle',
              publish_date: 'October 25, 1988',
              author_name: 'Josh Murtha',
              }
            );
});