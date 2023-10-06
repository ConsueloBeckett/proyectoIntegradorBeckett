const mongoose = require("mongoose")
const userCollection = "user"

const userSchema = new mongoose.userSchema({
name: {type: String, max:20, required},
lastName: {type: String, max:30, required},
email: {type: String, max:50, required}
})

const userModel = mongoose.model(userCollection, userSchema)

module.exports = {userModel}