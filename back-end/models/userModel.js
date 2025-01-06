const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Please enter username"]
        },
        email:{
            type:String,
            required:[true,"Please enter user email"],
            unique:[true,"Email already taken"]  //for unique email of user
        },
        password:{
            type:String,
            required:[true,"Enter password"]
        }
    },{
        Timestamp:true,
    }
)
module.exports = mongoose.model('User',userSchema)