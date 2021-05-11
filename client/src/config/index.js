let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  baseURL = process.env.REACT_APP_DEV
} else {
  // production code
  baseURL = process.env.REACT_APP_PROD
}

export { baseURL }