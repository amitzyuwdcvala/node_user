const fs = require("fs");


fs.readFile('./contact.txt', "utf-8", (err, result) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }else{
        console.log(result);
    }
});


fs.appendFileSync("./test.txt","Hey There \n");
