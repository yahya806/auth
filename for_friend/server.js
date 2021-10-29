const express = require("express");
const connectDB=require("./config/dbConnect");
const cors = require('cors');
const app = express();
require('dotenv').config();
const passport = require('passport');
app.use(passport.initialize());


//connect to DB
connectDB();


//router
app.use(express.json());
app.use(cors());

app.use("/user",require("./routes/user"));


//server



const PORT = process.env.PORT;

app.listen(PORT,(err) =>
err? console.log(err): console.log(`server is runnig on ${PORT}`)
);