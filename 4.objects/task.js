"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  }

Student.prototype.setSubject = function (subjectName) {
    student.setSubject = subjectName;
    return student.setSubject
}

Student.prototype.addMarks = function (...marks) {
  if('marks' in student === true) {
    student.marks = [...marks];
  }
}

Student.prototype.getAverage = function () {
  if('marks' in student === true && student.marks.length > 0) {
    let sum = student.marks.reduce((acc, item) => acc + item, 0);
    return (sum / student.marks.length);
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete student.marks;
  delete student.subject;
  this.excluded = reason;
}
