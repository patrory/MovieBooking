const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const path = require("path")


const app = express();
app.use(express.json()); // to accept json data
mongoose.set("strictQuery", false);
dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listening on ${PORT}`));