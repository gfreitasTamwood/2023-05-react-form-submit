/**
 * File Management
 */
const filePath = '../data/students.json';
const fileManager = require('fs');
let studentList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

/**
 * Server settings
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
/**
 * Server assigning
 */
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

/**
 * Get Api
 */
app.get("/students-api",function(req,res){
    res.json(studentList);
});

/**
 * Form Post
 */
app.post("/form-submit",function(req,res){
    const formContent = req.body;
    studentList.push(formContent);
    fileManager.writeFileSync(filePath,JSON.stringify(studentList));
    console.log(studentList)
    // return res.redirect(3000,"/login");
});

/**
 * Listen Server
 */
app.listen(5000, function(){
    console.log(`Server running into port 5000`);
});




