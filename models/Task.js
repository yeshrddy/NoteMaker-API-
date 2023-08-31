const {Schema, model}=require('mongoose');

//Structure for task

const taskSchema=new Schema({
    task:{
        type:String,
        trim:true,
        required:true
    }
},{timestamps:true})

let Task=model('task',taskSchema)

module.exports=Task;
