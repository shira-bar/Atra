const router=require('express').Router();
const user=require('./Controller/user.controller');


router.post('/createUser',user.createUser);
router.get('/getAllUsers',user.getAllUsers);

module.exports=router;