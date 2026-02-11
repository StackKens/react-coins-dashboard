import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/home';
import AboutPage from './pages/about';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!res.ok) throw new Error('Failed to fetch data!');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit]);

  //searched coins

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              loading={loading}
              error={error}
              search={search}
              setLimit={setLimit}
              setSearch={setSearch}
            />
          }
        ></Route>

        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
