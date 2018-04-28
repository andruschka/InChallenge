module.exports = function auth (state, emitter) {
  if (!state.user) emitter.emit('replaceState', '/login')
}
