class Shape {
    color;
    constructor(color) {
        this.color = color
    }
}

class square extends Shape {
    length;
    constructor(color, length) {
        super(color)
        this.length = length
    }
}
/*
JavaScript Object inheritance is Prototype based. 
ES6 classes are just syntactic sugar to make it look similar 
to OOP languages like Java. Behind the scene, no Class based inheritance but Prototype based inheritance.
*/