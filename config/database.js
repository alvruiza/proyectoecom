const mongoose = require('mongoose')
require("dotenv").config()
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error))
