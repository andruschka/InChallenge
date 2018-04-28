const html = require('choo/html')

module.exports = function renderSettings (state, emit) {
  const handleClick = () => {
    emit('logout')
  }
  return html`
  <div>
    <div class="content-padded">
      <h1>Settings</h1>
    </div>
    <ul class="table-view">
      <li class="table-view-cell media">
        <a class="navigate-right" onclick=${handleClick}>
          <span class="media-object pull-left icon icon-close"></span>
          <div class="media-body">
            Log out
          </div>
        </a>
      </li>
    </ul>
  </div>
  `
}
