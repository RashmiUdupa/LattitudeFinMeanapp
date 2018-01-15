var mongoose = require('mongoose');
var registerEvent = require('../models/RegisterEvent');

exports.update = function ( req, res ){
     var regData = new registerEvent({
         id : req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNo : req.body.phoneNumber,
        email : req.body.email,
        image : req.body.image,
        regType : req.body.type,
        noOfTickets : req.body.noofticket,
        regDate : req.body.date
   });
    regData.save()
    .then(item => {
        res.send("item saved to database");
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

