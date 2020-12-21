#!/usr/bin/env node
var argv = process.argv;
if (argv.length == 2) {
  argv.push('langs')
}
require('child_process')
  .spawn('java', [
    '-jar', __dirname + '/swagger-codegen-cli-3.0.23.jar']
      .concat(argv.slice(2)), { stdio: 'inherit' })
