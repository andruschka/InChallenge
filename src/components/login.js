const html = require('choo/html')

module.exports = function renderLogin (state, emit) {
  return html`
  <div>
    <header class="bar bar-nav">
      <h1 class="title">InChallenge</h1>
    </header>
    <div class="content">
      <h1>you are not logged in!</h1>
    </div>
  </div>
  `
}
