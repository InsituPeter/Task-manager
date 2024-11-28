const Task = require("../models/Task")
const getAllTasks =  (req,res)=>{
  res.send("get all Task")
}
const createTasks= async (req,res)=>{
    
  try { 
    const task= await Task.create(req.body);
     res.status(201).json(task)}

catch(error){
    console.log(error)
    console.log(req.body)
     res.status(400).json({message:"Error creating task", error})
     console.log(error)
  
}}
  
  

const getTasks = (req,res)=>{
    res.send("get single Task")
}
const updateTasks =(req,res)=>{
    res.send("update Task")
}
const deleteTasks =(req,res)=>{
    res.send("delete Task")
}

module.exports = {getAllTasks, createTasks, getTasks, updateTasks, deleteTasks}