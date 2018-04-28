const html = require('choo/html')

module.exports = function renderHome (state, emit) {
  const inc = () => {
    emit('increment', 1)
  }

  const dec = () => {
    emit('decrement', 1)
  }

  return html`
    <div>
      <h1>count is ${state.count}</h1>
      <button onclick=${inc}>Increment</button>
      <button onclick=${dec}>decrement</button>
    </div>
  `
}
