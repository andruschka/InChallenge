const html = require('choo/html')
const challengeCard = require('./challengeCard')

module.exports = function renderHome (state, emit) {
  return html`
  <div class="content-padded">
      <h1>Your statistic</h1>
      <div>
        <small>Acceleration</small>
        <div class="chart-bar chart-bar-red" style="width:70%;"></div>
      </div>
      <div>
        <small>Braking</small>
        <div class="chart-bar chart-bar-green" style="width:30%;"></div>
      </div>
      <div>
        <small>Misc</small>
        <div class="chart-bar chart-bar-blue" style="width:90%;"></div>
      </div>
      <br>
      <h1>Running challenges</h1>
      ${state.challenges.length > 0 ? state.challenges.map(c => challengeCard(c)) : html`<span>You have no running challenges</span>`}
  </div>
  `
}
