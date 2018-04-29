const html = require('choo/html')

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
          <div class="action-card-content">
            <h4>${challenge.name}</h4>
            <div>
              <small>${challenge.description}</small>
            </div>
            <div>
              <small class="badge">Preis: ${challenge.price}</small>
            </div>
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
