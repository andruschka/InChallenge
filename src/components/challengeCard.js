const html = require('choo/html')
const percentages = {
  '5ae47a8b2f968f2e8e2542f6': '40%',
  '5ae47b322f968f2e8e2542f7': '10%',
  '5ae594a7b3eff963bcc90a41': '0%',
}

module.exports = function renderChallengeCard (challenge, state, emit) {
  const userId = state.user._id
  const participating = (challenge.participants && challenge.participants.indexOf(userId) >= 0) ? true : false
  const handleClick = () => {
    emit('participateChallenge', challenge._id)
  }

  return html`

    <div class="action-card space-bottom">
      <div class="content-padded">
        <div class="action-card-body">
          <div class="action-icon">
            <img src="${challenge.image}" alt="" class="img-responsive" style="max-width:80%;">
          </div>
          <div class="action-content">
            <h4>${challenge.name}</h4>
            <div>
              <small>
                ${challenge.description}<br>
                <strong>Preis: ${challenge.price}</strong>
              </small>
            </div>
            ${participating ? html`<div style="margin:10px 0;">
              <div class="badge" style="font-size: 1.5em;white-space:nowrap;width: ${percentages[challenge._id]};">Fortschritt ${percentages[challenge._id]}</div>
            </div>` : null}
         ${participating ?   html`
        <button class="space-top btn btn-block btn-fab " style="opacity:.5;">du nimmst schon teil</button>` :   html`
        <button class="space-top btn btn-block btn-fab " onclick=${handleClick}>teilnehmen
          </button>`}
          </div>
        </div>
        
      </div>
    </div>
  `
}
