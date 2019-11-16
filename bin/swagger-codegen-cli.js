#!/usr/bin/env node
require('child_process')
  .spawn('java', [
    '-jar', __dirname + '/swagger-codegen-cli-2.4.9.jar']
      .concat(process.argv.slice(2)), {stdio: 'inherit'})
