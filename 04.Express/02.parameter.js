const express = require('express');
const app = express();

// use - 무엇인가를 사용하겠다. Middleware 적용
// http method - get, post, put, delete, all
// listen - 대기

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// routing path별 처리해 주는 함수
app.get('/aaa', (req, res) => {
    res.send('<h1>Hello World</h1>');
});
app.get('/bbb', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// Status code 404
app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});