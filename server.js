const express= require("express");
const dotenv =require("dotenv");
const cors = require("cors")
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const accountsRoute =require("./routes/accountsRoute");
const userRoute =require("./routes/userRoute");

dotenv.config();

const app = express();





//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/accounts", accountsRoute)
app.use("/api/v1/users", userRoute)



//home 
app.get ("/", (req, res)=> {
    res.send("keep Track of your expenses");
})

const port =process.env.PORT || 5000


app.listen(port, ()=>
console.log (`server is running ${port}`))
