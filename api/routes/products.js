const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

<<<<<<< HEAD
router.get("/", (req, res, next) => {
  Product.find()
    .select("name price _id")
    .exec()
=======


// db.collection.find(query, projection)  - query	document	Optional. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). projection	document	Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter.

// Select is used to filter out columns from the database result, we can also use projection but its fine this way
router.get("/", (req, res, next) => {
  console.log("in products")
  Product.find()
    .select("Rule Tests _id Score")
    .exec()   //  this will execute the previous statement and return a promise on which we can then apply our callbacks
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
<<<<<<< HEAD
            name: doc.name,
            price: doc.price,
=======
            Rule: doc.Rule,
            Tests: doc.Tests,
            Score: doc.Score,
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
<<<<<<< HEAD
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
=======
  console.log(req.body);
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    Rule: req.body.Rule,
    Tests: req.body.Tests,
    Score : req.body.Score
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
<<<<<<< HEAD
            name: result.name,
            price: result.price,
=======
            Rule: result.Rule,
            Tests: result.Tests,
            Score: result.Score,
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/products/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
<<<<<<< HEAD
    .select('name price _id')
=======
    .select('Rule Tests _id')
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/products'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
<<<<<<< HEAD
    updateOps[ops.propName] = ops.value;
=======
    updateOps[ops.propRule] = ops.value;
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/products',
<<<<<<< HEAD
              body: { name: 'String', price: 'Number' }
=======
              body: { Rule: 'String', Tests: 'Number', Score:'String' }
>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
