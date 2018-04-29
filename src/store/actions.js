const API_BASE = '//52.57.63.176'

module.exports = function setupActions (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    emitter.emit('fetchData')
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
  emitter.on('fetchData', () => {
    const promises = []
    promises.push(window.fetch(`${API_BASE}/user/?email=${state._current_user_email}`)
      .then(res => res.json()))
    promises.push(window.fetch(`${API_BASE}/challenge`)
      .then(res => res.json()))
    promises.push(window.fetch(`${API_BASE}/user/score/?email=${state._current_user_email}`)
      .then(res => res.json()))
    Promise.all(promises)
      .then((resArr) => {
        window.setTimeout(() => { // just for animation
          state.user = resArr[0]
          state.challenges = resArr[1]
          state.score = resArr[2]
          state.loading = false
          emitter.emit('render')
          console.log(state)
        }, 500)
      })
      .catch(err => {
        console.log('Could not fetch data: ', err.message)
        alert('Ohoh.\n Seems like there is a problem with the connection. Please try again later...')
      })
  })

  emitter.on('createUser', (usrObj) => {
    window.fetch(`${API_BASE}/challenge/participate`, {
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
    window.fetch(`${API_BASE}/challenge/participate`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: state.user.email,
        challenge: challengeId,
      }),
    })
      .then(() => {
        emitter.emit('fetchData')
      })
      .catch(err => {
        console.error(err)
      })
  })
}
