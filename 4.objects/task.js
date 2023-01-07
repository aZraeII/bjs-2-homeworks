function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  }


Student.prototype.setSubject = function (subjectName) {
    this.setSubject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if('marks' in Student === true) {
    this.addMarks = [...marks];
  }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
