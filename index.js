// module imports
const express = require("express");
const cors = require("cors");
const empDetailsRoute = require("./routes/details.route");


// variables
const port = 3000;


// creating express app 
const app = express();

// read json info coming from a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors policy for all requests
app.use(cors());

// main routes
app.use("/employee-details", empDetailsRoute);


// starting server
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})