function f (x, y, ...rest) {
    //here we first add x and y, then multiply it by the length of the array
    return (x + y) * rest.length
}
//rest parameter is like an array
//1+2=3
//array length = 3
//3*3 = 9
f(1, 2, "hello", true, 7) === 9
