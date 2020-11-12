const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
const promise1 = mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    // return self.connection.dropDatabase();
  })
  .then(() => {
//     Recipe.findOneAndUpdate({title:'Rigatoni alla Genovese'},{duration:100})
    // Recipe.deleteOne({title:'Carrot Cake'}).then (() => {
    //       console.log('Carrot Cake deleted?')
    //   })
    })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

Promise.all([promise1]).then(()=>{
  mongoose.connection.close()
}) 
      // Run your code here, after you have insured that the connection was made
    // Recipe.create({title: 'Test cuisine', cuisine: 'German', duration: 700});
    // Recipe.insertMany(data).then(recipes => console.log(recipes))
    // Recipe.updateOne({id: '5fad6cbe655af4a6c698fa19'},{duration: 100})