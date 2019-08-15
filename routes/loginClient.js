const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uri=require('../config/keys').Uri
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb').ObjectID;
const client = new MongoClient(uri, { useNewUrlParser: true })

router.get('/', function (req, res) {

    client.connect(err => {
      const collection = client.db("user").collection("users").find({email:"hai@gmail.com"}).limit(1).toArray().then(docs=>{
   
        res.send("dfsdfas")
        //console.log(docs)
      })
      
      client.close();
    });

})
module.exports = router;
