const dm=require('./db-module');

// dm.getList(rows=>{
//     for(let row of rows){
//         console.log(row.id,row.player,row.backNo,row.position);
//     }
// });

// dm.insertPlayer(['테스트',100,'포지션'],()=>{
//     dm.getList(rows=>{
//         for(let row of rows){
//             console.log(row.id,row.player,row.backNo,row.position);
//         }
//     })
// });

// dm.getPlayer(1,rows=>{
//     for(let row of rows){
//         console.log(row.id,row.player,row.backNo,row.position);
//     }
// });

dm.getPlayerByPosition('내야수',rows=>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);
    }
});

dm.getPlayerOrderByBackNo(1,rows=>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);
    }
});