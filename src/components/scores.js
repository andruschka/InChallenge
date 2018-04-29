const html = require('choo/html')
const calcIndicator = (indi) => Math.round(indi * 100)
const calcTime = (indi) => Math.round(indi/60)
const calcMeter = (indi) => Math.round(indi/1000)

module.exports = function renderScores (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
    <div class="segmented-control">
      <a class="control-item active" href="/scores">Dein Score</a>
      <a class="control-item" href="/scores/leaderboard">Leaderboard</a>
    </div>
    
    <div><strong>Prima.</strong> Du bist aktuell auf dem 2. Platz in Hannover.</div>


    <div class="rised-card space-top">
      <div class="text-center card-header">
        <div class="circle-score">
          <div class="circle-score-bg">
            <strong>
              ${calcIndicator(state.score.optidrive_indicator)}
            </strong>
          </div>
        </div>
        Optidrive
      </div>
      <div class="space-top score-stats">
        <div class="stat text-center">
          <div><strong>${calcIndicator(state.score.speeding_indicator)}</strong></div>
          <div><small>Beschl.</small></div>
        </div>
        <div class="stat text-center">
          <div><strong>${calcIndicator(state.score.constant_speed_indicator)}</strong></div>
          <div><small>Geschw.</small></div>
        </div>
        <div class="stat text-center">
          <div><strong>${calcIndicator(state.score.coasting_indicator)}</strong></div>
          <div><small>Stillst.</small></div>
        </div>
      </div>
      <hr>
      <div class="space-top score-stats">
        <div class="stat text-center">
          <div>
            <strong>Fahrtzeit ges.</strong>
          </div>
          <div>
          ${calcTime(state.score.totaldrivingtime)} Stunden
          </div>
        </div>
        <div class="stat text-center">
          <div>
            <strong>Strecke ges.</strong>
          </div>
          <div>
          ${calcMeter(state.score.totaldistance)} km
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
