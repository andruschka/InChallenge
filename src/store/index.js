const setupActions = require('./actions')

module.exports = function countStore (state, emitter) {
  state.loading = true
  state.user = {
    _id: '5ae4d4b6c1f94932efe58058',
    firstName: 'Andrej',
    lastName: 'Fritz',
    email: 'andrej@droove.me',
    address: 'Landwehrstr. 39',
    postalCode: '80336',
    city: 'Hannover',
    country: 'Deutschalnd',
    telephone: '+49 123 4567890',
    telemetricsId: '004'
  }
  state.startFinished = false
  state.startStep = 1
  state.challenges = []

  setupActions(state, emitter)
}
