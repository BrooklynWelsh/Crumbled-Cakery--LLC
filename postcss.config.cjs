const autoprefixer = require('autoprefixer')
const rfs = require('rfs')

const config = {
  plugins: [autoprefixer, rfs, require('postcss-nested')]
}

module.exports = config
