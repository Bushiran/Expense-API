const Account = require("../models/accountSchema");

//create an Account
const createAccount = async (req, res)=>{
    const newAccount= new Account(
        {
            amount:req.body.amount,
            note:req.body.note,
        } )
        await newAccount.save()
        res.status(201).json(newAccount);

};
 //get All Accounts
const getAllAccounts = async(req, res)=>{
    const accounts = await Account.find();
    res.json(accounts);
}
 
//get a account
const getSingleAccount = async (req, res)=>{
      const account =await Account.findById(req.params._id)
      res.json(account);

};

//update a account
const  updateAccount = async (req, res)=>{
    const foundAccount = await Account.findById(req.params._id)
    if (foundAccount) {
        foundAccount.amount = req.body.amount,
        foundAccount.note= req.body.note
        

        const updatedAccount = await foundAccount.save();
        res.json({updatedAccount})
    }
}

//delete a account
const deleteAccount = async (req, res)=>{
    const foundAccount = await Account.findById(req.params._id)
    if (foundAccount) {
        foundAccount.remove()
        res.json({msg:"accounts removed"})
    } else {
        res.status(404).json({error:"Account not found"})
    }
}
module.exports = {createAccount, getAllAccounts, getSingleAccount, deleteAccount, updateAccount}