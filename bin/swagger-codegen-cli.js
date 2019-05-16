//This version of the swagger-nodegen-cli launches a customized version of the swagger-codegen-cli-2.4.5.jar
//This custom jar was built using the source for swagger-codegen-cli-2.4.5 with the addition of the following PR
//https://github.com/swagger-api/swagger-codegen/pull/8845
#!/usr/bin / env node
require('child_process')
  .spawn('java', [
    '-jar', __dirname + '/swagger-codegen-cli-2.4.5-mitel.1.jar']
      .concat(process.argv.slice(2)), {stdio: 'inherit'})
