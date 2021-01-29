const mongoose = require('mongoose');
const fakeDB = require('./FakeDB');

mongoose.connect('mongodb+srv://obolland:7oquUnmVfZtmXGKb@cluster0.uahhi.mongodb.net/portfolioDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, async (err) => {
  if (err) { console.error(err); }
  else {
    console.log('> Starting populating DB...')
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log('> DB has been populated...');
  }
})