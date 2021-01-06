import express from "express"
import mongoose from "mongoose"
import ToDo from "./models/TodoModel"

const app=express()
const PORT=3001

//middlewares
//this allow us to get the information from front end in json format
app.use(express.json())

mongoose.connect("mongodb+srv://Amal:Password@1234@todocluster.fmbuo.mongodb.net/Todo_Db?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.get("/",async(req,res)=>{
    const todo=new ToDo({description:"watch game",complete:true})
    try {
        await todo.save()
        res.send("inserted data")
        
    } catch (error) {
        console.log(error)
        
    }
})

app.listen(PORT,()=>{
    console.log("SERVER RUNNING ON PORT:${PORT}")
})