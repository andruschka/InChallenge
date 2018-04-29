const html = require('choo/html')
const calcIndicator = (indi) => Math.round(indi * 100)

module.exports = function renderScores (state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
    <div class="segmented-control">
      <a class="control-item" href="/scores">Dein Score</a>
      <a class="control-item active" href="/scores/leaderboard">Leaderboard</a>
    </div>

    <div><strong>Prima.</strong> Du bist aktuell auf dem 2. Platz in Hannover.</div>

    <div class="rised-card space-top">
      <div class="text-center card-header">
        Leaderboard
      </div>

      <ul class="table-view" style="margin-top:30px;">
      <li class="table-view-cell ">
        <a class="">
            <strong>1.</strong> Brian O'Conner
            <span class="badge pull-right">80 optidrive</span>
        </a>
      </li>
      <li class="table-view-cell ">
        <a class="">
            <strong>2.</strong> Andrej Fritz
            <span class="badge badge-primary pull-right">${calcIndicator(state.score.optidrive_indicator)} optidrive</span>
        </a>
      </li>
      <li class="table-view-cell ">
        <a class="">
            <strong>3.</strong> Julian Krenge
            <span class="badge pull-right">69 optidrive</span>
        </a>
      </li>
      </ul>
    </div>
  </div>
  `
}
