const express = require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const  cors = require('cors')


const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const movieRoute = require("./routes/movies.js");
const listRoute = require("./routes/lists.js");

dotenv.config();
const host ="127.0.0.1";
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB connection successfully"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute)

app.listen(PORT,host, ()=>{
    console.log(`server is running on port ${PORT}`);
});