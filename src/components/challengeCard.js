const html = require('choo/html')

module.exports = function renderChallengeCard (challenge, state, emit) {
  const userId = state.user._id
  const participating = (challenge.participants && challenge.participants.indexOf(userId) >= 0) ? true : false
  const handleClick = () => {
    emit('participateChallenge', challenge._id)
  }

  return html`

    <div class="action-card space-bottom" style="background-image:url(${challenge.image});">
      <div class="content-padded">
        <h3>${challenge.name}</h3>
        <div class="rised-card" style="background-color:rgba(255,255,255,.8);color:#000;">
          <div>
            <small>${challenge.description}</small>
          </div>
          <div>
            <small>Preis: ${challenge.price}</small>
          </div>
        </div>
        ${ participating ?
    html`<button class="space-top btn btn-block btn-fab " style="opacity:.7;">du nimmst schon teil</button>` :
    html`<button class="space-top btn btn-block btn-fab " onclick=${handleClick}>teilnehmen</button>`}
        
      </div>
    </div>
  `
}
