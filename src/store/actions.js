module.exports = function setupActions (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    console.log(state)
    const lsUserStr = window.localStorage.getItem('InChallenge.user')
    if (lsUserStr) {
      console.log('User found in LocalStorage')
      try {
        state.user = JSON.parse(lsUserStr)
        emitter.emit('replaceState', '/')
        emitter.emit('render')
      } catch (e) {
        state.user = null
        emitter.emit('replaceState', '/login')
        emitter.emit('render')
      }
    } else {
      state.user = null
      emitter.emit('replaceState', '/login')
      emitter.emit('render')
    }
  })

  emitter.on('navigate', () => {
    if (!(state.route === 'login') && !state.user) {
      emitter.emit('replaceState', '/login')
      emitter.emit('render')
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
    emitter.emit('replaceState', '/login')
    emitter.emit('render')
  })
}
