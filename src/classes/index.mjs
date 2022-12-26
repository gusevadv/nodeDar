import chalk from 'chalk'
import log from './log.mjs'

function main (){
   log(`
   CPU: ${chalk.red('90%')}
   RAM: ${chalk.green('40%')}
   DISK: ${chalk.yellow('70%')}
   `)
}
main()