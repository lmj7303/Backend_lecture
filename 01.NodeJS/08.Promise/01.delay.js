//Promise
//Producer
function delayP(ms){
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{//resolve:성공했을 떄 실행되는 콜백함수
                resolve('성공');
            },1000);
        } catch(e){//reject: 실패했을 떄 실행되는 콜백함수
            reject('실패')
        }
    });
}

//Consumer
delayP(1000)
    // .then((val)=>{
    //     console.log(val);
    // });
    .then(console.log);
    .catch(console.log);