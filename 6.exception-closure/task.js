function parseCount(item){
    if(typeof(item) === 'number'){
        return item;
    }else if(isNaN(Number.parseFloat(item)) === true){
        throw new Error('Невалидное значение');
    }else if(typeof(item) === 'string'){
        return Number.parseFloat(item);
    }  
}


function validateCount(item){
    try{
       return parseCount(item);
    }catch(err){
        return err;
    }
}