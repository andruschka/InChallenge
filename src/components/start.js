const html = require('choo/html')
const onboarding1 = require('../img/Onboarding-1.png')
const onboarding2 = require('../img/Onboarding-2.png')
const onboarding3 = require('../img/Onboarding-3.png')

module.exports = function renderStart (state, emit) {
  const one = html`<div id="ss-1" style="background-image: url(${onboarding1});" class="splash animated bounceInRight" onclick=${() => emit('nextStartStep')}></div>`
  const two = html`<div id="ss-2" style="background-image: url(${onboarding2});" class="splash animated bounceInRight" onclick=${() => emit('nextStartStep')}></div>`
  const three = html`<div id="ss-3" style="background-image: url(${onboarding3});" class="splash animated bounceInRight" onclick=${() => emit('nextStartStep', true)}></div>`

  if (state.startStep === 1) {
    return one
  } else if (state.startStep === 2) {
    return two
  } else {
    return three
  }
}
