const express=require('express');
const app=express();

//use-무엇인가를 사용하겠다. Middleware 적용
//http method-get,post,put,delete,all
//listen-대기

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
});

//루팅 패스별 처리해주는 함수
app.get('/aaa',(req,res)=>{
    res.status(404)
    res.send('Path not found.');
});

app.get('/bbb',(req,res)=>{
    res.status(404)
    res.send('Path not found.');
});

//State code 404
app.get('*',(req,res)=>{
    res.status(404)
    res.send('Path not found.');
});

app.listen(3000,()=>{
    console.log('Server is runnung at http://127.0.0.1:3000');
});