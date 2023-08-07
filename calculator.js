const bodyParser=require('body-parser');
const express=require('express');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi=(weight/(height*height));
    res.send("The result is: "+bmi);
    // res.send("Thank you!");
});



app.listen(3000,function(){
    console.log("Port Started");
});