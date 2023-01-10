
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
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
