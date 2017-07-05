const movieRuntimeValidated = (runtime) =>
  runtime && runtime.length > 0 && (/\d/g).test(runtime)

export default movieRuntimeValidated
