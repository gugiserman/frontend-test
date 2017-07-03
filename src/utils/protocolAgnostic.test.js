import protocolAgnostic from './protocolAgnostic'

describe('protocolAgnostic util', () => {
  it('should make url protocol-relative', () => {
    const http = 'http://mango.com'
    const https = 'https://banana.com'

    expect(protocolAgnostic(http)).toBe('//mango.com')
    expect(protocolAgnostic(https)).toBe('//banana.com')
  })
})
