async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(localStorage.getItem('token')?{Authorization: `Bearer ${localStorage.getItem('token') || ''}`}:{})
    ,
  };

  const config = {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  };

  return fetch(`/api${endpoint}`, config);
}

export default apiFetch;
