////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Snack = require("../models/Snack");

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// REMEMBER INDUCES

// Index
router.get('/', (req, res) => {
  Snack.find({})
    .then(foundSnacks => {
      res.render('snacks/Index', {
        snacks: foundSnacks
      });
    })
    .catch(error => res.status(400).json({ error }))
})

// New
router.get('/new', (req, res) => {
  res.render('snacks/New');
});

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Snack.deleteOne({ _id: id })
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Update
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.cost = parseFloat(req.body.cost);

  Snack.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Create
router.post('/', (req, res) => {
  req.body.cost = parseFloat(req.body.cost);
  Snack.create(req.body)
    .then(data => res.redirect('/snacks'))
    .catch(error => res.status(400).json({ error }));
});

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;

  Snack.findOne({ _id: id })
    .then(foundSnack => {
      res.render('snacks/Edit', { snack: foundSnack });
    })
    .catch(error => res.status(400).json({ error }));
});

// Show
router.get('/:id', (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular snack from the database
  Snack.findOne({ _id: id })
    .then(foundSnack => {
      res.render('snacks/Show', { snack: foundSnack });
    })
    .catch(error => res.status(400).json({ error }));
});

// // SEED ROUTE
// router.get('/seed', (req, res) => {
//   // array of starter snacks
//   const starterSnacks = [
//     { name: "Chips", cost: 3.99, calories: 200 },
//     { name: "Cookies", cost: 4.99, calories: 1000 },
//     { name: 'Chocolate', cost: 1.99, calories: 400 },
//     { name: 'Nuts', cost: 2.99, calories: 500 }
//   ];

//   // Delete all snacks
//   Snack.deleteMany({})
//     .then(data => {
//       Snack.create(starterSnacks)
//         .then(data => {
//           res.status(200).json(data);
//         })
//         .catch(error => {
//           res.status(400).json(error);
//         });
//     })
//     .catch(error => {
//       res.status(400).json(error);
//     });
// });

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;