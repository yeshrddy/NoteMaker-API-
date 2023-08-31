//router level middleware

const express=require('express');
const Task = require('../models/Task');
let taskRouter=express.Router();

taskRouter.get("/tasks",async (req,res)=>{     //  end point to get all tasks
    try{
        let tasks= await Task.find()
        res.json(tasks);
    } catch(e){
        res.json({
            error:error.message
        })
    }
})

taskRouter.post("/tasks", async (req,res)=>{     //  end point to post task
    const {task}=req.body;
    try{
        let newTask = await Task.create({
            task:task
        })
        res.json(newTask)
    }catch(e){
        res.json({
            error:error.message
        })
    }
})

taskRouter.get("/tasks/:id", async (req,res)=>{     //  end point to get perticular task
    let id = req.params.id
    // console.log(id);
    try {
        let task=await Task.findById(id)
        res.json(task)
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

//Updating

taskRouter.put("/tasks/:id", async (req,res)=>{
    let id = req.params.id;
    const {task}=req.body;
    console.log(task);
    console.log(req.body);
    try {
        let task=await Task.findByIdAndUpdate(id,req.body)
        res.json(task)
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})


// //Deleting

// taskRouter.delete()

module.exports=taskRouter;

