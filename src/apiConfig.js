let apiUrl
const apiUrls = {
  production: 'https://prm-interview.s3.amazonaws.com/parks.json',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
