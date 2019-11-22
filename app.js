const express = require ('express');
const path = require('path');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req,res)=>{
let users =[
    {
        first_name:"john",
        last_name:"doe",
        age: 34,
        gender:"male"
    },
    {
        first_name:"betty",
        last_name:"agbo",
        age: 23,
        gender:"female"
    },
    {
        first_name:"sally",
        last_name:"brad",
        age: 30,
        gender:"male"
    }
];
res.json(users);

});

app.get('/download', (req,res)=>{
    //res.send('Getting this kini')
res.download(path.join(__dirname, '/downloads/pdf.pdf')); 
});
app.get('/about', (req,res)=>{
    //res.send('Getting this kini')
res.redirect(path.join( '/about.html')); 
});

app.post('/subscribe', (req, res)=> {
let name= req.body.name;
let email = req.body.email;

console.log(name+'  has subscribed with '+email)
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
})