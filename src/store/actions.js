module.exports = function setupActions (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    const lsUserStr = window.localStorage.getItem('InChallenge.user')
    if (lsUserStr) {
      console.log('User found in LocalStorage')
      try {
        state.user = JSON.parse(lsUserStr)
      } catch (e) {
        state.user = null
      }
    }
  })

  emitter.on('login', (email, pass) => {
    state.user = {
      email,
      pass
    }
    window.localStorage.setItem('InChallenge.user', JSON.stringify({email, pass}))
    emitter.emit('render')
  })

  emitter.on('logout', () => {
    state.user = null
    window.localStorage.removeItem('InChallenge.user')
    emitter.emit('render')
  })
}
