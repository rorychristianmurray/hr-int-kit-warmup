// Write a function that converts an object into an array of keys and values.

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

o1 = {
    D: 1,
    B: 2,
    C: 3
}

function objectToArray(obj) {
    console.log("in objectToArray")
    console.log("\nobj : ", obj)

    objKeys = Object.keys(objs)
	
	console.log("\nobjKeys : ", objKeys)
}


t1 = objectToArray(o1)

t1
console.log(t1)