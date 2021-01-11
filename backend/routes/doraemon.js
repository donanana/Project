var express = require('express');
var router = express.Router();
const doraemonController = require('../controllers/doraemonController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('doraemon', { title: 'Express' });
});

//create
router.post('/test/create',doraemonController.createProduct);

//read
router.get('/test', doraemonController.getTestData);
router.get('/people', doraemonController.getPeople);
router.get('/introduce/:name', doraemonController.getNameByHid);
router.get('/people/:category', doraemonController.getPeopleByCid);

//update
router.post('/test/update',doraemonController.updateProduct);

//delete
router.get('/test/delete/:id',doraemonController.deleteProductById);


module.exports = router;
