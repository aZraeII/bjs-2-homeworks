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


class Student {
    constructor(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
    }
}
  
  Student.prototype.setSubject = function (subjectName) {
      this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if('marks' in this === true) {
        this.marks.push(...marks);
    }
  }
  
  Student.prototype.getAverage = function () {
    if('marks' in this === true && this.marks.length > 0) {
      let sum = this.marks.reduce((acc, item) => acc + item, 0);
      return (sum / this.marks.length);
    } else {
      return 0;
    }
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.setSubject;
    this.excluded = reason;
  }