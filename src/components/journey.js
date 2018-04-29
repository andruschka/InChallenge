const html = require('choo/html')
const mapImg = require('../img/map.jpg')

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
          <div>
            <strong>90</strong>
          </div>
          <div>
            <small>Beschleunigung</small>
          </div>
        </div>
        <div class="stat text-center">
          <div>
            <strong>80</strong>
          </div>
          <div>
            <small>Geschw.</small>
          </div>
        </div>
        <div class="stat text-center">
          <div>
            <strong>80</strong>
          </div>
          <div>
            <small>Bremsung</small>
          </div>
        </div>
        <div class="stat text-center">
          <div>
            <strong>90</strong>
          </div>
          <div>
            <small>Kurven</small>
          </div>
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
  </div>
  `
}
