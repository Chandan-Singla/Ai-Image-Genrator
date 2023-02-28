const express=require('express');
const{genrateimg}=require('../controllers/openaicontroller');
const router=express.Router();
router.post('/genrate',genrateimg);
module.exports=router;