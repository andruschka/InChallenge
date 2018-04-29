const setupActions = require('./actions')

module.exports = function countStore (state, emitter) {
  state._current_user_email = 'andrej@droove.me',
  state.loading = true
  state.user = null
  state.startFinished = false
  state.startStep = 1
  state.challenges = []

  setupActions(state, emitter)
}
