const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../models/User');

userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'User': 'user has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
      if(err){
        console.log(err);
      }
      else {
        res.json(users);
      }
    });
  });
  //for update and edit and delete
  userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
  });
  
  //  Defined update route
  userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
      if (!user)
        res.status(404).send("Record not found");
      else {
        user.FirstName = req.body.FirstName;
        user.LastName = req.body.LastName;
        user.Email = req.body.Email;
  
        user.save().then(user => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  userRoutes.route('/delete/:id').get(function (req, res) {
      User.findByIdAndRemove({_id: req.params.id}, function(err, user){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  // check if user is exist
  userRoutes.route('/check').post(function (req, res) {
    let user2 = new User(req.body);
    User.findOne({$and:[{Email :user2.Email},{Password:user2.Password}]}, function (err, user){
    if(user) res.json(user);
    else res.json(err);
  });
   /*  userRoutes.route('/add').post(function (req, res) {
      let user = new User(req.body);
      user.save()
        .then(user => {
          res.status(200).json({'User': 'user has been added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
    }); */
});
module.exports = userRoutes;