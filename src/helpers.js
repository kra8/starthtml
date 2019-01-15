const fs      = require('fs')
const path    = require('path')
const output  = require('./output')

function copyFile(from, to, force = false) {
  let option = 0
  if (!force) option = fs.constants.COPYFILE_EXCL
  fs.copyFile(from, to, option, error => {
    if (!error) {
      output.info(`Created ${to}`)
      return
    }

    if (error.code === 'EEXIST') {
      output.error(`ERROR:(${error.syscall}) file already exists, ${to}`)
      process.exit(1)
    }

    if (error.code === 'ENOENT') {
      output.error(`ERROR:(${error.syscall}) no such file or directory, ${to}`)
      process.exit(1)
    }
  })
}

function getStubPath(name) {
  return path.resolve(__dirname, '../stubs', name)
}

module.exports.copyFile = copyFile
module.exports.getStubPath = getStubPath
