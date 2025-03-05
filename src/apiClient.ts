const API_BASE_URL =
  import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_PROD_API_BASE_URL;

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

  return fetch(`${API_BASE_URL}${endpoint}`, config);
}

export default apiFetch;
