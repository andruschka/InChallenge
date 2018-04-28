const html = require('choo/html')

module.exports = function renderChallengeCard (challenge) {
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
        <button class="space-top btn btn-block btn-fab ">teilnehmen</button>
      </div>
    </div>
  `
}
