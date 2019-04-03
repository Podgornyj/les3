function isEven(int){
    if(typeof int !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    return int % 2 === 0;
}
