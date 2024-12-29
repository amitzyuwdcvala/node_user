const fs = require("fs");
const _ = require("lodash");

//Sync file writeing
fs.writeFileSync("./text.txt", "hey there i writing the data in this text.txt file", () => {
    console.log("file written in text file is done");
});


fs.writeFile('./text.txt', "hey second time i write in this file", () => {
    console.log("second time file written in text file is done\n");
});

fs.appendFile("./text.txt", "third time i write in this file", () => {
    console.log("\n third time file written in text file is done");
});

fs.appendFile("./text.txt", "fourth time i write in this file", () => {
    console.log("\n third time file written in text file is done");
});

//copy file
fs.cpSync("./text.txt", "./copy.txt"); 
console.log("File copied");

//delete file
fs.unlinkSync("./copy.txt");


var data = ["amit", "person", 1,2,1,2, 'name', 'age', '2'];

var filterdata = _.uniq(data);

console.log("Filtered data: ", filterdata);
