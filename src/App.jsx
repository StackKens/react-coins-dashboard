import { useState, useEffect } from 'react';
import logo from '/public/favicon.png';

const API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch data!');
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <>
      <div className='flex space-x-4 gap-4 px-6 py-3 items-center  bg-neutral-200'>
        <img
          src={logo}
          alt='crypto-dashboard-logo'
          className='w-10 h-10  rounded-lg'
        />
        <h1 className='text-black-900 font-bold text-2xl '>Crypto Dashboard</h1>
      </div>

      {loading && <p>Loading...</p>}
      {error && (
        <p className='font-medium text-red-400 p-2'>Sorry! An Error Occured!</p>
      )}

      <div>
        {coins.map((coin) => (
          <p key={coin.id}>{coin.name}</p>
        ))}
      </div>
    </>
  );
};

export default App;
