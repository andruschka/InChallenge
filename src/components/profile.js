const html = require('choo/html')

module.exports = function renderProfile (state, emit) {
  return html`
  <div class="content-padded">
      <h1>Profile</h1>
  </div>
  `
}
