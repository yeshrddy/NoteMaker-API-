const express=require('express');
const mongoose=require('mongoose');
const taskRouter = require('./routes/taskRoutes');
const cors = require('cors');

//app instance
const app=express();
const PORT=5000;

//db connection

async function db(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todoDB');
    console.log("db connected");
}
db();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json())
app.use('/app',taskRouter)


  

// app.get('/',(req,res)=>{
//     res.send("Hello")
// })

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("Listening on port 5000");
})
