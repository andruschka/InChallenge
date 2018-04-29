const html = require('choo/html')

module.exports = function renderScores (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
    <div class="segmented-control">
      <a class="control-item active" href="/scores">Your score</a>
      <a class="control-item" href="/scores/leaderboard">Leaderboard</a>
    </div>
    
    <div><strong>Prima.</strong> Du bist aktuell auf dem 2. Platz in Hannover.</div>


    <div class="rised-card space-top">
      <div class="text-center card-header">
        <div class="circle-score">
          <div class="circle-score-bg">
            <strong>
              90
            </strong>
          </div>
        </div>
        von 100 pts
      </div>
      <div class="space-top score-stats">
        <div class="stat text-center">
          <div><strong>90</strong></div>
          <div><small>Beschleunigung</small></div>
        </div>
        <div class="stat text-center">
          <div><strong>80</strong></div>
          <div><small>Geschw.</small></div>
        </div>
        <div class="stat text-center">
          <div><strong>80</strong></div>
          <div><small>Bremsung</small></div>
        </div>
        <div class="stat text-center">
          <div><strong>90</strong></div>
          <div><small>Kurven</small></div>
        </div>
      </div>
      <hr>
      <div class="space-top score-stats">
        <div class="stat text-center">
          <div>
            <strong>Tank Ersp.</strong>
          </div>
          <div>
          5€
          </div>
        </div>
        <div class="stat text-center">
          <div>
            <strong>CO2 Emis</strong>
          </div>
          <div>
          2,4 kg
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
