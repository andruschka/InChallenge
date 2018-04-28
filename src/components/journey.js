const html = require('choo/html')

module.exports = function renderJourney (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
      <h1>Journey</h1>
  </div>
  `
}
