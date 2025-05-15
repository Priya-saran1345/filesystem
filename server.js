import { createServer } from 'node:http';
import * as fs from 'fs'
import fspromise from 'node:fs/promises'
import { connect } from 'node:net';


const server = createServer(async (req, res) => {
    // console.log("request",req)
    // console.log('Request received');
    // routing ----------------------
    // res.writeHead(200, {
    //     'content-type': 'text/Html'
    // })  
   let count=1
     if (req.url === '/') {
        let Htmldata =fs.createReadStream('./Stream.html')
        Htmldata.pipe(res)
  }
  else if(req.url=='/stream/')
  {

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    setInterval(() => {
      res.write(`data: the data is ${count++}\n\n`);
    }, 1000);
  }
   else if (req.url == '/blog/') {
        // const data= await fs.readFile('./index.html')
        // res.end(data)
        const dataStream = fs.createReadStream('./index.html')
        // dataStream.on('data',(chunk)=>{
        //     res.write(chunk)
        // })
        // dataStream.on('end',()=>{
        //     res.end
        // })
        dataStream.pipe(res)
    }
    else if (req.url == '/expenses/') {
        if (req.method == "POST") {
            let buffer = ''
            req.on('data', (chunk) => {
                // console.log('chunk is ',chunk)
                buffer = buffer + chunk.toString()
            })
            req.on('end', async () => {
                const data = await fspromise.readFile('./dbData.json')
                const dbData = JSON.parse(data)
                dbData.push(JSON.parse(buffer))
                await fspromise.writeFile('./dbData.json', JSON.stringify(dbData, null, 2))
                res.end('yes succesfully received data')
            })
        }
        else if (req.method == "GET") {
        const readStream =fs.createReadStream('./dbData.json')
        readStream.pipe(res)
        }
    }
    else {
        res.end('<h1>Hello from server</h1>`');
    }
});
server.listen(3002, () => {
    console.log('Server is listening on port 3002');
});

