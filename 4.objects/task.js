function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  }

let student = new Student("Василиса", "женский", 19);
console.log(student)
Student.prototype.setSubject = function (subjectName) {
    student.setSubject = subjectName;
}

student.setSubject("Algebra");
console.log(student)
Student.prototype.addMarks = function (...marks) {
  if('marks' in student === true) {
    student.marks = [...marks];
  }
}

student.addMarks(4, 5, 4, 5);
console.log(student)
Student.prototype.getAverage = function () {
  if('marks' in student === true && student.marks.length > 0) {
    let sum = student.marks.reduce((acc, item) => acc + item, 0);
    return (sum / student.marks.length);
  } else {
    return 0;
  }
}

console.log(student.getAverage())

Student.prototype.exclude = function (reason) {
  delete student.marks;
  delete student.setSubject;
  this.excluded = reason;
}

student.exclude('плохая учёба')
console.log(student)
console.log(student.getAverage())
