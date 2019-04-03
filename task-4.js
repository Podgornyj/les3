function f(day){
    if(typeof day !== 'number'){
        throw new Error('parameter type is not a Number');
    }else if(day < 1 || day > 7){
        throw new Error('parameter should be in the range of 1 to 7');
    }
    let dayText;

    switch (day) {
        case 1:
            dayText = 'Понедельник';
            break;
        case 2:
            dayText = 'Вторник';
            break;
        case 3:
            dayText = 'Среда';
            break;
        case 4:
            dayText = 'Четверг';
            break;
        case 5:
            dayText = 'Пятница';
            break;
        case 6:
            dayText = 'Суббота';
            break;
        case 7:
            dayText = 'Воскресенье';
            break;

    }
    return dayText;
}
