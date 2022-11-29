const Person = function (fullName,birth) {
 this.fullName=fullName;
 this.birth=birth;
};

Person.prototype.calAge = function (){
    console.log(2022 -Number(this.birth));
};

const Student = function (fullName,birth,major){
    Person.call(this,fullName,birth);
    this.major = major;
};

Student.prototype = Object.create(Person.prototype); 

Student.prototype.callName = function (){
    console.log(this.fullName)
};

let shinn = new Student("shinn",2004,"IT");
shinn.callName();
shinn.calAge();

console.log(Person.prototype.isPrototypeOf(Student.prototype));
console.log(Object.prototype.isPrototypeOf(Person.prototype));




