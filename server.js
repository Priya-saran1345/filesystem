import { createServer } from 'node:http';
import * as fs from 'fs'


const server = createServer(async(req, res) => {
console.log("request",req)
console.log('Request received');
// routing ----------------------
res.writeHead(200,{
'content-type':'text/Html'
})
if(req.url=='/blog/')
{
    // const data= await fs.readFile('./index.html')
    // res.end(data)
    const dataStream =fs.createReadStream('./index.html')
    // dataStream.on('data',(chunk)=>{
    //     res.write(chunk)
    // })
    // dataStream.on('end',()=>{
    //     res.end
    // })
    dataStream.pipe(res)
}
else{

    res.end('<h1>Hello from server</h1>`');
}
});
server.listen(3001, () => {
console.log('Server is listening on port 6000');
});

