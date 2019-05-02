const path = require('path')
module.exports = (args) => {
  return new Promise((resolve, reject) => {
    const spawn = require('child_process').spawn
    const java = spawn(
      'java',
      ['-jar', path.join(__dirname, '/bin/swagger-codegen-cli-2.4.4.jar')].concat(args),
      { stdio: 'inherit' }
    )
    java.on('close', (code) => {
      if (code === 0) {
        return resolve(code)
      }
      reject(code)
    })
  })
}
