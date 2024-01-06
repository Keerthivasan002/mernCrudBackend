import mongoose from "mongoose"

const userFrom = mongoose.Schema({
    username:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
})

export default mongoose.model("user", userFrom)