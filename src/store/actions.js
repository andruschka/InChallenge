module.exports = function setupActions (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    emitter.emit('fetchChallenges')
    if (window.localStorage.getItem('Droove.startFinished')) state.startFinished = true
  })

  emitter.on('login', (email, pass) => {
    state.user = {
      email,
      pass
    }
    window.localStorage.setItem('InChallenge.user', JSON.stringify({email, pass}))
    emitter.emit('replaceState', '/')
    emitter.emit('render')
  })

  emitter.on('logout', () => {
    state.user = null
    window.localStorage.removeItem('InChallenge.user')
    emitter.emit('replaceState', '/login')
    emitter.emit('render')
  })

  emitter.on('nextStartStep', (finish) => {
    state.startStep = state.startStep + 1
    if (finish) {
      state.startFinished = true
      window.localStorage.setItem('Droove.startFinished', true)
    }
    emitter.emit('render')
  })

  // data actions
  emitter.on('fetchChallenges', () => {
    window.fetch('//52.57.63.176/challenge')
      .then(res => res.json())
      .then(data => {
        window.setTimeout(() => {
          state.challenges = data
          state.loading = false
          emitter.emit('render')
        }, 800)
      })
      .catch(err => {
        console.error(err)
      })
  })

  emitter.on('createUser', (usrObj) => {
    window.fetch('//52.57.63.176/challenge/participate', {
      body: JSON.stringify(usrObj),
      method: 'POST',
    })
      .then(() => {
        state.user = usrObj
        emitter.emit('fetchChallenges')
      })
      .catch(err => {
        console.error(err)
      })
  })

  emitter.on('participateChallenge', (challengeId) => {
    window.fetch('//52.57.63.176/challenge/participate', {
      method: 'POST',
      body: JSON.stringify({
        email: state.user.email,
        challenge: challengeId,
      }),
    })
      .then(() => {
        emitter.emit('fetchChallenges')
      })
      .catch(err => {
        console.error(err)
      })
  })
}
