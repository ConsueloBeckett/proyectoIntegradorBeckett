const express = require("express")
const { default: mongoose } = require("mongoose")
const userRouter = require("./routes/users.router")
const app = express()
const port = 8080

app.listen(port, () =>{
console.log(`server ${port}`)

})

app.use(express.json())

mongoose.connect("mongodb+srv://pruebaCoder:9zhXvimsIRCZadOc@cluster0.c2raoho.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log("connected to DB")
})
.catch(e =>{
    console.e("cant conect to the DB", e)
})

app.use("/api/users", userRouter)