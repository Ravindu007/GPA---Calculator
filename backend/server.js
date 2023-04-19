require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")


// routes
const subjectRoutes = require("./routes/subjectRoutes")

const app = express()

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json())


// routes
app.use("/api/subjects", subjectRoutes)


mongoose.connect(process.env.DB_URI)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
      console.log("Listning to port: ", process.env.PORT);
    })
  })
  .catch((error)=>{console.log(error);})
