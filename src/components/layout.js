const html = require('choo/html')
const splash = require('./splash')
const start = require('./start')

const wrapPage = (View) => (state, emit) => {
  if (state.loading) return splash()
  if (!state.startFinished) return start(state, emit)

  return html`
    <div>
      <!-- <header class="bar bar-nav">
        <h1 class="title">InChallenge</h1>
      </header> -->
      <div class="content">
        ${View(state, emit)}
      </div>
      <nav class="bar bar-tab">
        <a class="tab-item ${state.route === '/' ? 'active' : ''}" href="/">
          <span class="icon icon-home"></span>
          <span class="tab-label">Home</span>
        </a>
        <a class="tab-item ${state.route === 'challenges' ? 'active' : ''}" href="/challenges">
          <span class="icon icon-person"></span>
          <span class="tab-label">Challenges</span>
        </a>
        <a class="tab-item ${state.route === 'settings' ? 'active' : ''}" href="/settings">
          <span class="icon icon-gear"></span>
          <span class="tab-label">Settings</span>
        </a>
      </nav>
    </div>
  `
}

module.exports = wrapPage
