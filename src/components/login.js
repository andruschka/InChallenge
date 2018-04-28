const html = require('choo/html')

module.exports = function renderLogin (state, emit) {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    if (email && password) {
      emit('login', email, password)
    }
  }

  return html`
  <div>
    <header class="bar bar-nav">
      <h1 class="title">InChallenge</h1>
    </header>
    <div class="content">
      <form class="input-group" onsubmit=${handleSubmit}>
      <div class="input-row">
        <label>Email</label>
        <input type="email" id="email" placeholder="max@mustermann.de">
      </div>
      <div class="input-row">
        <label>Password</label>
        <input id="password" type="password" placeholder="">
      </div>
      
      <div class="content-padded">
        <button type="submit" class="btn btn-positive btn-block">Log in</button>
      </div>
      </form>
    </div>
  </div>
  `
}
