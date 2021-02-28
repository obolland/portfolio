import mongoose from 'mongoose'

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return
  }

  // note - .env file required
  return mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => {
    if (err) {console.error(err)}
    else {console.log('Connected to DB')}
  })
}

export default dbConnect