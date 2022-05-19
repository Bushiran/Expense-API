const mongoose = require ("mongoose")

const accountSchema = mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
   
    note:{
        type: String,
        required: true
    }
},{
    timestamp:true
})

const Account = mongoose.model("Account", accountSchema)
module.exports = Account;