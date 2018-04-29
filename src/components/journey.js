const html = require('choo/html')
const mapImg = require('../img/map.jpg')
const calcIndicator = (indi) => Math.round(indi * 100)
const calcTime = (indi) => Math.round(indi / 60)
const calcMeter = (indi) => Math.round(indi / 1000)

module.exports = function renderJourney (state, emit) {
  return html`
  <div class="animated fadeIn">
    <div class="img-responsive">
      <img src="${mapImg}" alt="" style="width:100%;height:auto;">
    </div>
    <div class="content-padded">
      <div class="segmented-control">
        <a class="control-item active" href="/journey">Letzte Fahrt</a>
        <a class="control-item" href="/journey">Vergangene Fahrten</a>
      </div>

      <div class="rised-card space-top">
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
            ${15} Minuten
            </div>
          </div>
          <div class="stat text-center">
            <div>
              <strong>Strecke ges.</strong>
            </div>
            <div>
            ${2,3} km
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
