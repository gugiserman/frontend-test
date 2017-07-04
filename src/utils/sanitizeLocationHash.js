const sanitizeLocationHash = (hash = window.location.hash) =>
  hash.replace(/[/#?]/g, '') || ''

export default sanitizeLocationHash
