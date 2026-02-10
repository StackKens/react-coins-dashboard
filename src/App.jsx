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
        <h1 className='text-black-900 font-bold text-2xl  '>
          Crypto Dashboard
        </h1>
      </div>

      {loading && <p>Loading...</p>}
      {error && (
        <p className='font-medium text-red-600 p-2 text-center'>
          Sorry! An Error Occured!
        </p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-5'>
        {coins.map((coin) => (
          <div
            key={coin.id}
            className='p-3 bg-white rounded-lg  border border-gray-200 flex flex-col items-center text-center'
          >
            <img src={coin.image} alt={coin.name} className='w-16 h-16 mb-2' />
            <h1 className='font-semibold text-lg'>{coin.name}</h1>
            <p className='text-gray-500 uppercase'>{coin.symbol}</p>
            <p className='font-medium mt-1'>
              Price: ${coin.current_price.toLocaleString()}
            </p>
            <p className='text-gray-500'>
              Market_Cap: ${coin.market_cap.toLocaleString()}
            </p>
            <p
              className={
                coin.price_change_24h >= 0
                  ? 'text-green-500 font-semibold'
                  : 'text-red-500 font-semibold'
              }
            >
              {coin.price_change_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
