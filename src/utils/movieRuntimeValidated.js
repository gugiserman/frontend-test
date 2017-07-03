const movieRuntimeValidated = (runtime) =>
  runtime && runtime.length > 0 && !(/N\/A/i).test(runtime)

export default movieRuntimeValidated
