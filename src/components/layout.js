const html = require('choo/html')
const splash = require('./splash')
const start = require('./start')
const homeIcon = require('../img/tabs/Home.png')
const journeyIcon = require('../img/tabs/Journey.png')
const scoresIcon = require('../img/tabs/Scores.png')
// const rewardsIcon = require('../img/tabs/Rewards.png')
const profileIcon = require('../img/tabs/Profile.png')
const homeIcon_b = require('../img/tabs/Home_blue.png')
const journeyIcon_b = require('../img/tabs/Journey_blue.png')
const scoresIcon_b = require('../img/tabs/Scores_blue.png')
// const rewardsIcon_b = require('../img/tabs/Rewards_blue.png')
const profileIcon_b = require('../img/tabs/Profile_blue.png')

const wrapPage = (View) => (state, emit) => {
  if (state.loading) return splash()
  if (!state.startFinished) return start(state, emit)

  return html`
    <div>
      <header class="bar bar-nav">
        <h1 class="title">Droove</h1>
      </header>

      <div class="content">
        ${View(state, emit)}
      </div>

      <nav class="bar bar-tab">
        <a class="tab-item ${state.route === '/' ? 'active' : ''}" href="/">
          <img src="${state.route === '/' ? homeIcon_b : homeIcon}" alt="" width="25" height="25" class="icon">
          <span class="tab-label">Home</span>
        </a>
        <a class="tab-item ${state.route === 'journey' ? 'active' : ''}" href="/journey">
          <img src="${state.route === 'journey' ? journeyIcon_b : journeyIcon}" alt="" width="25" height="25" class="icon">
          <span class="tab-label">Fahrten</span>
        </a>
        <a class="tab-item ${(['scores', 'scores/leaderboard'].indexOf(state.route) >= 0) ? 'active' : ''}" href="/scores">
          <img src="${(['scores', 'scores/leaderboard'].indexOf(state.route) >= 0) ? scoresIcon_b : scoresIcon}" alt="" width="25" height="25" class="icon">
          <span class="tab-label">Score</span>
        </a>
        <a class="tab-item ${state.route === 'profile' ? 'active' : ''}" href="/profile">
          <img src="${state.route === 'profile' ? profileIcon_b : profileIcon }" alt="" width="25" height="25" class="icon">
          <span class="tab-label">Profil</span>
        </a>
      </nav>
    </div>
  `
}

module.exports = wrapPage


// < a class="tab-item ${state.route === 'rewards' ? 'active' : ''}" href = "/rewards" >
//   <img src="${state.route === 'rewards' ? rewardsIcon_b : rewardsIcon}" alt="" width="25" height="25" class="icon">
//     <span class="tab-label">Rewards</span>
//       </a>
