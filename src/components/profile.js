const html = require('choo/html')
const userIcon = require('../img/user-icon.png')

module.exports = function renderProfile(state, emit) {
  const user = state.user
  return html`
  <div class="content-padded animated fadeIn">
      <div class="action-card space-top">
        <h2>${user.firstName} ${user.lastName}</h2>
        <br>
        <div class="action-card-body">
          <div class="action-icon">
            <img src="${userIcon}" alt="" class="img-responsive" style="max-width:100%;">
          </div>
          <div class="action-content content-padded">
            <p>
              <div style="font-weight:200;font-size:.8em;">Email</div>
              ${user.email}
            </p>
            <p>
              <div style="font-weight:200;font-size:.8em;">Telefon</div>
              ${user.telephone}
            </p>
            <p>
              <div style="font-weight:200;font-size:.8em;">Adresse</div>
              ${user.address}<br>
              ${user.postalCode} ${user.city}<br>
              ${user.country}
            </p>
          </div>
        </div>
        <div>
          <button class="btn btn-block btn-link">bearbeiten</button>
        </div>
        <div>
          <button class="btn btn-block btn-outlined btn-negative">ausloggen</button>
        </div>
      </div>
  </div>
  `
}
