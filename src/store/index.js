const setupActions = require('./actions')

module.exports = function countStore (state, emitter) {
  state.user = null
  setupActions(state, emitter)
}
