const fs = require('fs')
// creating JS object to be converted into JSON - 
const book = {
    title : 'Rich dad poor dad',
    author: 'Robert'
}
// Using JSON.stringify(object) we can create json style string
// const jsonString = JSON.stringify(book)
// console.log(jsonString)

// to convert jsonString to JS object we use JSON.parse
// const obj = JSON.parse(jsonString)
// console.log(obj)

// Storing jsonString as a JSON in json file. 
// fs.writeFileSync('1-json.json',jsonString)


//Readin data from a json file
const dataBuffer = fs.readFileSync('1-json.json')
//databuffer is an hex code data, so convert it into JSON
const dataJSON = dataBuffer.toString()
console.log(dataJSON)
// now we need to convert the json into JS object
const obj = JSON.parse(dataJSON)
console.log(obj.title)
