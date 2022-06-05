const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB")

//To CreateDocument
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [1, "No name specified"] // NB. 1= true, 0=false
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Peaches",
  rating: 9,
  review: "Peaches are Very nice fruits"
});


// fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Delicious and nourishing"
});
// pineapple.save();
const waterMelon = new Fruit({
  name: "waterMelon",
  rating: 6,
  review: "Not a bad fruit"
});
// waterMelon.save();

const person = new Person ({
  name: "Jake",
  age: 12,
  favouriteFruit: pineapple
});
// person.save();


//INSERT more fruits

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 3,
//   review: "Bad"
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 8,
//   review: "Lovely"
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 9,
//   review: "Lovely"
// });
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });


//To FIND/ SELECT
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

//To close the connection without ctrl+c use the below code
    // mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit);
    });
  }
  });


//To UPDATE record

  Person.updateOne({name: "Sam"}, {favouriteFruit: waterMelon}, function(err){
    if(err){
      console.log(err);
    } else{
      console.log("Successfully updated document");
    }
  });



  // To DELETE a record

  // Fruit.deleteOne({name: "Peach"}, function(err){
  //   if(err){
  //     console.log(err);
  //   } else{
  //     console.log("Deleted successfully");
  //   }
  // });

  // Person.deleteMany({_id: "628dd3d8c473a5b86ad9e9ac"}, function(err){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     console.log("Deleted all Person names in condition specified");
  //   }
  // });
