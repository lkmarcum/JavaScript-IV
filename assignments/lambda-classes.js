// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instProps) {
    super(instProps);
    this.specialty = instProps.specialty;
    this.favLanguage = instProps.favLanguage;
    this.catchPhrase = instProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  adjustGrade(student) {
    function getInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    student.grade = student.grade + getInt(1, 10);
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.grade = studentProps.grade;
  }
  listSubjects() {
    this.favSubjects.forEach(function(element) {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate(grader, student) {
    if (student.grade < 70) {
      while (student.grade < 70) {
        grader.adjustGrade(student);
      }
    }

    console.log(
      `Congratulations, ${this.name}! Your grade is now ${
        this.grade
      }, so it's time for you to graduate!`
    );
  }
}

class ProjectManager extends Instructor {
  constructor(PMProps) {
    super(PMProps);
    this.gradClassName = PMProps.gradClassName;
    this.favInstructor = PMProps.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const bob = new Instructor({
  name: "Bob",
  age: 42,
  location: "NYC",
  specialty: "UX",
  favLanguage: "CSS",
  catchPhrase: "What do you mean that cannot fit there?"
});

const ted = new Instructor({
  name: "Ted",
  age: 39,
  location: "Phoenix",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPhrase: "What's a semicolon?"
});

const sally = new ProjectManager({
  name: "Sally",
  age: 28,
  location: "San Diego",
  specialty: "Sorting",
  favLanguage: "JavaScript",
  catchPhrase: "When I code my dog thinks I'm in pain.",
  gradClassName: "WEB20",
  favInstructor: "Whoever maintaines my sanity"
});

const billy = new ProjectManager({
  name: "Billy",
  age: 39,
  location: "Phoenix",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPhrase: "I haven't slept in months...",
  gradClassName: "Web19",
  favInstructor: "Josh"
});

const kurt = new Student({
  name: "Kurt",
  age: 31,
  location: "Seattle",
  previousBackground: "Toying around with Java",
  className: "WEB21",
  favSubjects: ["LESS", "CSS", "JavaScript"],
  grade: 30
});

const ashley = new Student({
  name: "Ashley",
  age: 24,
  location: "Orlando",
  previousBackground: "None",
  className: "WEB21",
  favSubjects: ["Flex", "HTML"],
  grade: 62
});

ted.speak();
bob.demo("CSS");
ted.grade(ashley, "HTML");
kurt.listSubjects();
ashley.PRAssignment("JavaScript");
kurt.sprintChallenge("LESS");
sally.standUp("WEB21");
billy.debugsCode(kurt, "CSS");

kurt.graduate(ted, kurt);
