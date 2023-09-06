const mongoose = require('./connection');
const Snack = require('./Snack');

const db = mongoose.connection;

db.on('open', () => {
 // array of starter snacks
 const starterSnacks = [
  { name: "Chips", cost: 3.99, calories: 200 },
  { name: "Cookies", cost: 4.99, calories: 1000 },
  { name: 'Chocolate', cost: 1.99, calories: 400 },
  { name: 'Nuts', cost: 2.99, calories: 500 }
];

// Delete all snacks
Snack.deleteMany({})
  .then(data => {
    Snack.create(starterSnacks)
      .then(data => {
        db.close();
      })
      .catch(error => {
        db.close();
      });
  })
  .catch(error => {
    db.close();
  });
})