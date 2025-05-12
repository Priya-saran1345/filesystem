import os from 'node:os'
import chalk from 'chalk'
const calculatetimeavg=(old_cpu,new_cpus)=>{
    // console.log('the old cpu is',old_cpu)
    const oldcputime= Object.values(old_cpu.times).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const newcputime= Object.values(new_cpus.times).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const idletime=new_cpus.times.idle-old_cpu.times.idle
    const totaltime=newcputime-oldcputime
    const used=totaltime-idletime
    return (100*used)/totaltime.toFixed(1)
}
const monitor = () => {
    const old_cpu = os.cpus()
    // console.log('the old cpu is ', old_cpu)
    setTimeout(() => {
        const new_cpus = os.cpus()
        const usage = 
        new_cpus.map((cpu, i) => {
            return {
                index: i,
                times: calculatetimeavg(old_cpu[i],new_cpus[i])+'%'
            }
        })
        const usedmemory =((os.totalmem())-(os.freemem()))/(1024*1024*1024)
        console.clear()
        console.log(chalk.blue("the total cpu used is"))
        console.table(usage)
        console.log(chalk.blue("the used memory is"))
        console.log(usedmemory.toFixed(2) ,'GB')
    },1000) 
}
// monitor()
setInterval(() => {
    console.log('the new table is ')
    monitor()
}, 1000);