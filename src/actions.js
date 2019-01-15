const path        = require('path')
const { copyFile, getStubPath } = require('./helpers')

function createHtml(name = null, command) {
  const from = getStubPath('index.html.stub')
  const to = path.resolve(`${name || 'index'}.html`)
  copyFile(from, to, command.force)
}

module.exports.createHtml = createHtml
