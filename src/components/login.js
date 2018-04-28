const html = require('choo/html')

module.exports = function renderLogin (state, emit) {
  return html`
    <div>
      <h1>you are not logged in!</h1>
    </div>
  `
}
