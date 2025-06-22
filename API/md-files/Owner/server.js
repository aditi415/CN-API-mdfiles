
/*
//Different approach
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Route for Owner API
app.use("/api/owners", require("../routes/owners"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
require("dotenv").config(); // Loads variables from .env
const express = require("express"); // requires the express module
const mongoose = require("mongoose"); // requires the mongoose module from mongo db
const bodyParser = require("body-parser"); // body parser required for parsing
const app = express(); // constant app for initializing Express module 
app.use(bodyParser.json()); // using Body-parser to parse datatype of data in json 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/owners", require("routes/owners"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
