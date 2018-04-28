const html = require('choo/html')

module.exports = function renderChallengeCard (challenge) {
  return html`
  <a href="/challenges/${challenge._id}">
    <div class="action-card space-bottom" style="background-image:url(${challenge.image});">
      <div class="content-padded">
        <h3>${challenge.name}</h3>
      </div>
    </div>
  </a>
  `
}
