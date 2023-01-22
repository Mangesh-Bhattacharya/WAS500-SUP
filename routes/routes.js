const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index",{title : " Home Page "});
})
router.get('/add-new-student',(req,res)=>{
    res.render("addstudent",{title : " Add New Student "});
})
router.get('/students-list',(req,res)=>{
    res.render("studentslist",{title : " Students List "});
})
router.get('/add-new-course',(req,res)=>{
    res.render("addcourse",{title : " Add New Course "});
})
router.get('/course-list',(req,res)=>{
    res.render("courselist",{title : " Course List "});
})
router.get('/add-new-result',(req,res)=>{
    res.render("addresult",{title : " Add New Result "});
})
router.get('/result-list',(req,res)=>{
    res.render("resultlist",{title : " Result List "});
})
module.exports = router;