const mongoose=require("mongoose")
const tasksSchema= new mongoose.Schema({
    name:String, 
    completed:Boolean
})

module.exports= mongoose.model("Task", tasksSchema)