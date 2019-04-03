function f(num){
    if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number');
    }

    return num * num * num;
}
