const html = require('choo/html')

module.exports = function renderHome (state, emit) {
  return html`
  <div>
      <h1>you are logged in!</h1>
  </div>
  `
}
