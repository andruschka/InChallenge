const html = require('choo/html')
const splash = require('../img/Splash.jpg')

module.exports = function renderSplash () {
  return html`<div id="splash" style="background-image: url(${splash});" class="splash animated fadeIn"></div>`
}
