const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors')
const app = express();

// Middlewares
app.use(express.json())
app.use(cors());
app.use('/books',router)

mongoose.connect(
   "mongodb+srv://Ankit_Kishan:Ankit2002@cluster0.khr2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then(() => console.log('connected to database'))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err))