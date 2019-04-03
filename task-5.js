const array = [1, 2, -4, 3, -9, -1, 7];

function isPositive(int){
    if(typeof int !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    return int >= 0;

}

function f(array){
    let arr = [];
    array.forEach((item) => {
        if(typeof item !== 'number'){
            throw new Error('parameter type is not a Number');
        }
        if(isPositive(item)){
            arr.push(item);
        }
    })
    return arr;
}

console.log(f(array));
