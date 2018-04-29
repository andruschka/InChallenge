const html = require('choo/html')
const challengeCard = require('./challengeCard')

module.exports = function renderProfile(state, emit) {
  return html`
  <div class="content-padded animated fadeIn">
      <div class="rised-card space-top">
        <div class="card-header">
          <div class="profile-info-container">
            <div class=".img-profile">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/Harry-Potter-1-.jpg" alt="" class="img-profile clip-circle">
            </div>
            <div class="profile-info">
              <ul >
                <li class="table-view-cell">Joe Smith</li>
                <li class="table-view-cell">+49 123 12345678</li>
                <li class="table-view-cell">joe@mail.com</li>
                <li class="table-view-cell">Policy Nr. #123456789</li>
                
                <li class="table-view-cell"><span class="badge badge-primary">Edit</span></li>
                <li class="table-view-cell"></li>
              </ul>    
            </div>
          </div>
        </div>


        
        <div class="space-top score-stats">
          <div class="stat text-center">
            <div class="circle-score-small">
              <div class="circle-score-small-bg">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rised-card space-top">
        <div class="space-top score-stats">
            <div class="stat text-center">
              <div class="circle-score-small">
                <div class="circle-score-small-bg">
                  3
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  `
}
