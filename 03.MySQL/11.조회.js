const mysql=require('mysql');
config=require('./mysql.json');
console.log(config);
// {
//     host:'localhost',
//     user:'kisuser',
//     password:'kispass',
//     port:3306,
//     database:'world', //use world의 의미;
// }

// const fs=require('fs');
// fs.writeFile('mysql.json',JSON.stringify(config),err=>{

// });

const connection=mysql.createConnection(config);

connection.connect();//mysql DB에 접속
const sql= `SELECT * FROM city WHERE population>9000000;`;
connection.query(sql,(err,rows,fields)=>{
    if(err)
        throw err;
    // console.log(rows); //rows:배열
    for(let row of rows){
        const str=`${row.ID}\t${row.Name}\t${row.ConturyCode}\t${row.District}\t${row.Population}`;
        console.log(str);
    }
    // console.log(fields);
    
});
connection.end();//mysql db 접속 해제