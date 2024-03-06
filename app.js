const express=require("express"); //for connecting(API)
const app=express();
app.listen(3000,()=>{
    console.log("server initiated")
});


require('./database.js');  //mongodb connection file
//requirin hbs
const path=require('path'); //requiring path
const empcollection=require('./Model'); //schema file creation
const template_path=path.join(__dirname,'./template/views'); //  joining path 
app.set("view engine",'hbs'); //which file i.e hbs
app.set("views",template_path); //konsi m se
app.use(express.urlencoded({extended:false})); //utha rhe hai text field se and put in mongo

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/register',async(req,res)=>{
    const data=new empcollection({
        username: req.body.username,
        password: req.body.password
    
    });
    const postData=await data.save() //save data
    res.send(postData);
})
app.get('/login',(req,res)=>{
    res.render('login');

})
app.post('/login',async(req,res)=>{
    
        const username= req.body.username;
        const password= req.body.password;
        const search= await empcollection.findOne({username:username});
        if(search.password===password){
            res.render('Home');
        }
        else{
            res.send('wrong password');
        }
    
    
    
})