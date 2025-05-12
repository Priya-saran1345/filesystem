// import fs from "node:fs"
import * as fs from "node:fs/promises"
import { start } from "node:repl"

// three mothods to work ->
// async methods of file creation 
// sync methods of file creation 
// promise api of file creation


// folder creation-----------------------------
export const createFolder = async (foldername) =>{
    try{

        await fs.mkdir(foldername,{recursive:true})
        console.log('folder created succesfully ')
    }
    catch{
        console.log('folder creation failed ')
    }
}

export const createFile =async(filename ,initialcontent)=>{
    try{
    await fs.writeFile(filename, initialcontent, 'utf8'); // Create empty file
        console.log('file created succesfully ')
    }
    catch{
        console.log('file creation failed')
    }
}
export const writeToFile =async(filename ,content)=>{
    try{
    await fs.writeFile(filename, content, 'utf8'); // Create empty file
        console.log('file write succesfully ')
    }
    catch{
        console.log('file write failed')
    }
}
export const deleteFolder =async(filename)=>{
    try{
    await fs.rm(filename ,{recursive:true}); // Create empty file
        console.log('folder delete successfully succesfully ')
    }
    catch{
        console.log('folder delet failed')
    }
}
export const listItems = async (folderPath) => {
  try {
    const items = await fs.readdir(folderPath);
    console.log('Items in folder:', items);
    return items;
  } catch (error) {
    console.error('Failed to list items:', error.message);
    return [];
  }
}













// create and append file ----------------------------------------------------
async function main(pathname) {
    await fs.writeFile(pathname,"hello this is the file  with promises api \n")
    await fs.appendFile(pathname,"appended")
    console.log('function executed successfully')
}
// main('./text2.txt')
// read file-----------------------------------------------------------------
const readfile = async () =>{
const data=    await fs.readFile('./hello.txt','utf-8')
    console.log('file readed successfully',data)
}
// readfile()
// delete file ------------------------------------------------------------------
 export const deleteFile = async (filename) =>{
    await fs.unlink(filename)
    console.log('file deleted successfully')
}
// deletefile()
// read file stats for the file ------------------------------------------------------------------
const fetfilestats=async(filepath)=>{

const stats=await fs.stat(filepath)
console.log('the stats is ',stats)
}
// fetfilestats('./text2.txt')






















// create files with callback----------------------------------------------------------
// const createfile=(pathname)=>{
//     fs.writeFile(pathname,"hello priya  ",(err)=>{
//         if(err){console.log("file not  created because of siomthing wrong")
//             return
//         }
//         else console.log("the file has beed created ") 
//         })

// fs.appendFile(pathname ,"this is me ",(err)=>{
//     if(err)console.log('something went wrong in appnding in the file')
//         else console.log('file appended successfully')
// })
//     // fs.appendFileSync(pathname,"priya saran "  )
//     console.log('the code run before creatting a file!')
// }
// createfile('./hello.txt')
