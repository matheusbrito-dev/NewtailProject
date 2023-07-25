async function apiUrl() {
  const key = '4f8b8f90';
  const endpoint = `http://www.omdbapi.com/?apikey=${key}`
  return endpoint;
}

export default apiUrl;