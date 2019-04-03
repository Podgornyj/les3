function getDivisors(int){
    if(typeof int !== 'number'){
        throw new Error('parameter type is not a Number');
    }else if(int === 0){
        throw new Error('parameter can\'t be a 0');
    }
    let divisor = [];
    for (let i = 1; i <= int; i++){
        if(int % i === 0){
            divisor.push(i);
        }
    }
    return divisor;
}
