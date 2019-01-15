/* eslint no-console:off */
const colors  = require('colors/safe')

const output = {}

output.log = (...args) => console.log(...args, '\n')
output.error = (...args) => console.error(colors.red(...args), '\n')
output.info = (...args) => console.info(colors.green(...args), '\n')

module.exports = output
