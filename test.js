const fs = require('fs') // as we are working with fs
// loading the data from a JSON file
const dataBuffer = fs.readFileSync('1-json.json') // this will give use buffer

// to work with it lets convert it into an object
var dataJSON = dataBuffer.toString();
const object = JSON.parse(dataJSON)

console.log(object)
// make changes 

object.name = "Kushal"
object.age = 25

// modified the object 
dataJSON = JSON.stringify(object)
fs.writeFileSync('1-json.json',dataJSON)

console.log(object)
