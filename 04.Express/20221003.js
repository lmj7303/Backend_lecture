class varClass{
    ret(){
        return new varClass;
    }
}

let tempVar1=new varClass();
let tempVar2=tempVar1.ret();