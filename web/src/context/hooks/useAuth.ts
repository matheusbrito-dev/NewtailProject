import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(body: {}) {
    try {
      const { data: { token } } = await api.post('/authenticate', body);
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      return true;
    } catch (err) {
      setAuthenticated(false);
      return false;
    }
  }

  async function handleLogout() {
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = '';

    setAuthenticated(false);
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout }
}