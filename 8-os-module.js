const os=require("os")

//info about current users
const user=os.userInfo();
//console.log(user);


//method returns the system uptime in seconds
const upTime=os.uptime();
//console.log(`The system uptime in seconds is ${upTime}`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOS)