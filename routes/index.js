var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/UserInfo';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/insert', function(req, res, next) {
  var item = {
    Select: req.body.select,
    Name: req.body.name,
    Phone: req.body.phone,
    Address:req.body.address,
    Landmark:req.body.landmark,
    Pincode:req.body.pincode


  }

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('userInfo').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});



router.post('/insert', function(req, res, next) {
  var yourArray=[];
  var item = {
    Select: req.body.select,
    Name: req.body.name,
    Phone: req.body.phone,
    Address:req.body.address,
    Landmark:req.body.landmark,
    Pincode:req.body.pincode
  };
  var id = req.body.id;

  userInfo.find({Address:req.body.address}, function (err, docs) {
        if (docs.length){
            cb('Address exists already',null);
        }else{
            user.save(function(err){
                cb(err,user);
            });
        }
    });
});



module.exports = router;
