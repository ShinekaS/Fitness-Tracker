const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

// router.get('/user', )



//--------------------------------------------------
// Set the view engine and views directory
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// Render a view
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;
