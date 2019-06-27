//javascript is a prototype based language
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

//every object in javascript, which is an object, has a member called prototype
//its purpose is to server values when an object request it
//all objects can inherit from other objects using the keyword prototype
Person.prototype.nationality = "Danish";

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};