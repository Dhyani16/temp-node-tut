const path=require("path");
console.log(path.sep)
const filePath=path.join("/content","subfolder","hello.txt")
console.log("the file path is",filePath)

const basename=path.basename(filePath);
console.log("the basename is",basename);

const absolute=path.resolve(__dirname,"content","subfolder","text.txt")
console.log(__dirname)
console.log("this is the absolute path",absolute)