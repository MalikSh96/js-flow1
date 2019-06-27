//destructuring gives the ability to extract variables/objects from other variables/objects

var introduction = ["Hello", "I", "am", "Malik"];
var [greeting, pronoun] = introduction; //takes first 2 values

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

var [greeting, , , name] = introduction; //takes first and last value

console.log(greeting);//"Hello"
console.log(name);//"Malik"

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

//extracts the following variables out from the object options
let { title, width, height } = options;

//alert displays an alert box
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200