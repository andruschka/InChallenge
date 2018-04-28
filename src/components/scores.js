const html = require('choo/html')

module.exports = function renderScores (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
      <h1>Scores</h1>
  </div>
  `
}
