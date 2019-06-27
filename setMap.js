//Set
//A set is a collection of items which are unique i.e no element can be repeated
let s = new Set()
const s2 = new Set([1, 2, 3, 4, 5]);

//s.add adds the new element with a specified value at the end of the Set object. 
s.add("hello").add("goodbye").add("hello")
console.log(s.size === 2) // no duplicate entries
//s.has returns true if the specified value is present in the Set object.
s.has("hello") === true
//s.values returns all the values from the Set in the same insertion order.
for (let key of s.values()) // insertion order
    console.log(key)

//Map
let m = new Map()
//m.set setting key, string, with values int
m.set("Hello", 1)
m.set("world",8)
m.set("world",84)
m.set("Hi",1)
//m.entries returns an iterator object which contains an array having the entries of the set, in the insertion order.
for (let [ key, val ] of m.entries())
    console.log(key + " = " + val)