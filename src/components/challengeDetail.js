const html = require('choo/html')
const moment = require('moment').default
require('moment/src/locale/de')

module.exports = function renderChallengeDetail (state, emit) {
  if (state.challenges.length === 0) return html`<div></div>`

  const challenge = state.challenges.find(c => c._id === state.params.challengeId)
  const participating = challenge.participants.indexOf(state.user.email) >= 0

  return html`
    <div >
    <div class="content-padded">
      <h1>${challenge.name}</h1>
      <p style="font-size:1.4em;margin:40px 0;">${challenge.description}</p>
    </div>
    <div class="card">
      <ul class="table-view">
        <li class="table-view-cell">
          <strong>Start:</strong> ${moment(challenge.startDate).fromNow()}
        </li>
        <li class="table-view-cell">
          <strong>Challenge endet:</strong> ${moment(challenge.endDate).fromNow()}
        </li>
        <li class="table-view-cell">
          <strong>Ort:</strong> ${challenge.city}
        </li>
        <li class="table-view-cell">
          <strong>Preis:</strong> ${challenge.price}
        </li>
      </ul>
    </div>
    <div class="content-padded">
      <button class="btn btn-positive btn-block btn-outlined">Herausforderung annehmen</button>
    </div>
    </div>
  `
}
