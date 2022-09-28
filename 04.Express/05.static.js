const express=require('express');
const fs=require('fs')
const ejs=require('ejs');
const app=express();

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.get('/',(req,res)=>{
    fs.readFile('view/05.static.html,'utf8,(err,html)=>{
        res.send(html);
    });
});

app.get('/ejs',(req,res)=>{
    ejs.renderFile('./views.05.static.ejs',)
})