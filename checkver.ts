const semver = require('semver')
const { engines } = require('./package')
const version = engines.node

if (!semver.satisfies(process.version, version)) {
  console.log(
    [
      '\033[41;30m UNEXPECTED node version \033[41;32m\033[0m',
      'Your Node version is incompatible with ' + process.mainModule.path + '.',
      'Expected version: ' + version,
      'Got: ' + process.version
    ].join('\n')
  )
  process.exit(1)
}else{
  console.log(`echo check environment successfully`)
}