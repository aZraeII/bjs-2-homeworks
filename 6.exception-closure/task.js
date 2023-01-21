function parseCount(item){
    if(typeof(item) === Number){
        console.log(item);
    }else if(typeof(item) === String){
        console.log(Number.parseFloat(item));
    }else if(parseInt(item) === NaN){
        throw new Error('Невалидное значение');
    }
}