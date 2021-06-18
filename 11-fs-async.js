//FileSystem => Asynchronous

const { readFile, writeFile } = require("fs");
console.log("starting the file");
readFile("./content/first.txt", "utf8", (error, data) => {
  if (error) {
    return null;
  }

  const first = data;
  readFile("./content/second.txt", "utf8", (error, data) => {
    if (error) {
      return null;
    }

    const second = data;
    writeFile("./content/writtenFileAsync.text",`Here is the written data ${first} and ${second}`,(error,data)=>{
      if(error){
        console.log(error);
      } 
      console.log("done with this task");   
    });
  });
});
console.log("starting the next task");
console.log(__dirname)