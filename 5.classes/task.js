class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type;
    }
    fix(){
        this.state = this.state * 1.5;
    }
    set state(state){
        if(state >= 100){
            return this._state = 100;
        }else if(state <= 0){
            return this._state = 0;
        }else{
            return this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
  
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }    
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }    
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }   
}

class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book._state > 30){
        this.books.push(book);                                                                                                                 
        }
    }
    findBookBy(type, value){
        return this.books.find(book => book[type] === value) || null;
    }
    giveBookByName(bookName){
        const book = this.findBookBy('name', bookName);
        if (book) {
          this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}



const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

