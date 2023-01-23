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


class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if((a >= b + c) || (b >= a + c) || (c >= b + a)){
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter(){
        return (this.a + this.b + this.c);
    }
    get area(){
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3)
    }
}

function getTriangle(a, b ,c){
    try{
        return new Triangle(a, b ,c)
    }catch(err){
        return {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}