const mysql=require('mysql');
const config=require('./mysql.json');

const conn=mysql.createConnection(config);
conn.connect();
const sql=`SELECT gid, name, DATE_FORMAT(debut,'%Y-%m-%d') AS debutDate, hit_song_id FROM girl_group;`;
conn.query(sql,(err,rows,fields)=>{
    if(err)
        throw err;
    for(let row of rows){
        console.log(`${row.gid}\t${row.name}\t${row.debutDate}\t${row.hit_song_id}`)    
    }
});
conn.end();