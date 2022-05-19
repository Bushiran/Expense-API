const express =require("express");
const {createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount} =require ("../controllers/accountsController")
const protect = require ("../middlewares/authMiddleware");

const router = express.Router()


router.route("/")
.post(createAccount)
.get(getAllAccounts)
router.route("/:_id")
.get(protect, getSingleAccount)
.put(protect, updateAccount)
.delete(protect, deleteAccount)




module.exports=router;