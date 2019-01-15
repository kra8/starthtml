const program     = require('commander')
const { version } = require('../package.json')
const actions     = require('./actions')

program.version(version)
program
  .command('create:html [name]')
  .description('create boilerplate of material.')
  .option('-f --force', 'Overwritten if it already exists.')
  .action(actions.createHtml)

program.parse(process.argv)

// Make serve the default command
const args = process.argv
if (!args[2] || !program.commands.some(c => c.name() === args[2])) {
  program.outputHelp()
}
