function f(arr){
    if(!Array.isArray(arr)){
        throw new Error('parameter type should be an array');
    }else if(!arr.length){
        throw new Error('parameter can\'t be an empty');
    }

    let tmpArr = [...arr];
    console.log(tmpArr[0]);

    tmpArr.splice(0,1);
    if(tmpArr.length){
        f(tmpArr);
    }
}
