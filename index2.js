class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let averageGrade = 0;
    for (const grade of this.grades) {
      averageGrade += grade;
    }
    return averageGrade / this.grades.length;
  }
}

let eva = new Student("Evan", "Arts", [95, 75, 45]);
console.log(eva)

console.log(eva.gpa())


eva.addGrade(95);
console.log(eva.gpa());