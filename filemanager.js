import chalk from "chalk"
import { Interface } from "node:readline";
import * as readline from 'node:readline/promises';
import { exit, stdin, stdout } from 'node:process'

const rl = readline.createInterface({ input: stdin, output: stdout })
import { createFolder, createFile, writeToFile, deleteFile, deleteFolder, listItems } from './fs.js'






const menu = async () => {
    console.clear()
    console.log(chalk.blue.bold(`\n📁 File system manager \n`))
    const options = [
        "create Folder",
        "Create File",
        "Write To File",
        "Delete File",
        "Delete Folder",
        "List items"
        , "exit"
    ]
    options.forEach((option, index) => {
        console.log(`${index + 1} ${option}`)
    })
    const answer = await rl.question('\n select option:')
    console.log('anser: ', answer)
    switch (answer) {
        case '1':
            const foldername = await rl.question('Enter folder path:')
            await createFolder(foldername)
            break;
        case '2':
            const filename = await rl.question('Enter file name:')
            const initialcontent = await rl.question('Enter file content:')
            await createFile(filename, initialcontent)
            break;
        case '3':
            const filename3 = await rl.question('Enter file name:')
            const content3 = await rl.question('Enter content:')
            await writeToFile(filename3, content3)
            break;
        case '4':
            const filename4 = await rl.question('Enter file name you want to delete:')
            await deleteFile(filename4)
            break;
        case '5':
            const foldername5 = await rl.question('Enter folder name you want to delete:')
            await deleteFolder(foldername5)
            break;
        case '6':
            const filename6 = await rl.question('Enter folder name you want to list:')
            await listItems(filename6)
            break;
        case '7':
            process.exit()
            break;
        default:
        console.log('invalid option')
    }

    await rl.question('press enter to continue')
    menu()
}


menu()