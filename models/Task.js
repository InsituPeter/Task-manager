import { Schema, model } from "mongoose"
const tasksSchema= new Schema({
    name:String, 
    completed:Boolean
})

export default model("Task", tasksSchema)