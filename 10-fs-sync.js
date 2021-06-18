//FileSystem

const {readFileSync,writeFileSync}=require("fs")
console.log("start")
//fs.readFileSync( path, options )
const first=readFileSync("./content/first.txt","utf8");

const second=readFileSync("./content/second.txt","utf8");
console.log(first)
console.log(second)

writeFileSync("./content/writtenFile.text","Hey there, this is the written file")
console.log("done with the task");
console.log("starting the next task")
