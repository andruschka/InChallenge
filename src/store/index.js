const setupActions = require('./actions')

module.exports = function countStore (state, emitter) {
  state.loading = true
  state.user = {
    email: '',
    password: 'trustno1'
  }
  state.startFinished = false
  state.startStep = 1
  state.challenges = []

  setupActions(state, emitter)
}
