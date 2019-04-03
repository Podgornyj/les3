function f(a,b,c){
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
        throw new Error('all parameters type should be a Number');
    }
    return (a-b)/c;
}
