const html = require('choo/html')
const challengeCard = require('./challengeCard')

module.exports = function renderHome (state, emit) {
  let challenges = null
  if (state.challenges && state.challenges.length > 0) {
    challenges = state.challenges.map(c => challengeCard(c, state, emit))
  }

  return html`
    <div class="content-padded animated fadeIn">
      <h1>Offene Challenges</h1>
      <h4>für dich in Hannover</h4>
      <br>
      ${challenges}
  </div>
  `
}
