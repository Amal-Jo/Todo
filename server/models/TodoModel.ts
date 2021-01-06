import mongoose, { model } from "mongoose"

const TodoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true

    },
    complete:{
        type:Boolean,
        required:true
    }
})
export default model("TodoModel",TodoSchema);
//const ToDo= model("TodoModel",TodoSchema)
//module.exports=ToDo