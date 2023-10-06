const {Router} = require("express")
const {userModel} = require("../models/user.model")

const router = Router()

router.get("/", async(req,res)=>{
 try{
    let user = await userModel.find()
    res.send({resut:"success", payload: users })
 } catch(error){
    console.log(error)
 }

})

router.post("/", async(req,res)=>{
    let { name, lastName, email } = req.body
    if(!name || !lastName || !email){
        res.send({status: "error", error: "Missing data"})
    }
    let result =  await userModel.create({name, lastName, email})
})
