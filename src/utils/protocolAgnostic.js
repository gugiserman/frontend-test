const protocolAgnostic = (url) =>
  url.replace(/http:|https:/g, '')

export default protocolAgnostic
