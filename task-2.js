function f(){
    let summ = 0;
    for(let arg of arguments){
        if(typeof arg !== 'number'){
            throw new Error('all parameters type should be a Number');
        }
        summ += arg;
    }
    return summ;
}
