const mongoose=require('mongoose');

const LogSchema=mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    attention:{
        type: Boolean
    },
    tech:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})

module.exports= mongoose.model('log',LogSchema);