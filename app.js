import express, { json } from "express";
import connectDB from "./db/connect.js";
import tasks from "./routes/task.js";
import 'dotenv/config'

const app = express();


//middleware
app.use(json())



//route
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})
app.use("/api/v1/tasks", tasks)
const port = 3000;



const start = async()=>{
   try{
        await connectDB(process.env.DB_LOCAL);
        app.listen(port, console.log(`server is listening on port ${port}`))
   }
    catch(error){
        console.log(error)
         
    }

}

start()