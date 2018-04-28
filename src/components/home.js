const html = require('choo/html')
const challengeCard = require('./challengeCard')

module.exports = function renderHome (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
      <h1>Home</h1>
  </div>
  `
}
