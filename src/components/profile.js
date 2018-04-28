const html = require('choo/html')
const challengeCard = require('./challengeCard')

module.exports = function renderProfile (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
      <h1>Profile</h1>
  </div>
  `
}
