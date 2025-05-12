// import os from "node:os"
// console.log('cups',os.cpus().length)
// console.log('total memory',os.totalmem()/(1024*1024*1024))
// console.log('free memory',os.freemem()/(1024*1024*1024))
// console.log('up time ',os.uptime()/(60*60))

// console.log(process.argv)
const checkGreaterNumber=(arr)=>{
    let maxinteger=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>maxinteger){
            maxinteger=arr[i]
        }
    }
    console.log('the maximum integer is ',maxinteger)
}
checkGreaterNumber([2,3,4,5,67,78,23,12,3,4,6])