const getSupportedParams = () => ({
  director: {
    minLength: 5,
    default: true,
  },
  title: {
    minLength: 3,
  },
  actor: {
    minLength: 5,
  }
})

export default getSupportedParams
