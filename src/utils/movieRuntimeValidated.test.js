import movieRuntimeValidated from './movieRuntimeValidated'

describe('movieRuntimeValidated util', () => {
  it('should validate a movie runtime info', () => {
    const validRuntimes = ['120 min', '120', '1h20m']
    const invalidRuntimes = [null, undefined, '', 'N/A', 'n/a']

    validRuntimes.forEach(runtime =>
      expect(movieRuntimeValidated(runtime)).toBeTruthy()
    )

    invalidRuntimes.forEach(runtime =>
      expect(movieRuntimeValidated(runtime)).toBeFalsy()
    )
  })
})
