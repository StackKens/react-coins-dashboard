import { useState, useEffect } from 'react';
import logo from '/public/favicon.png';
import CoinCard from './components/CoinCard';
import { FaSearch } from 'react-icons/fa';

const API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

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

  //searched coins

  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

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

      <div className='px-6 pt-4'>
        <div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white max-w-sm  focus-within:border-blue-500'>
          <FaSearch size={16} className='text-gray-400' />
          <input
            type='text'
            placeholder='Search coins'
            className='flex-1 text-sm outline-none bg-transparent '
            value={search}
            onChange={searchCoins}
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && (
        <p className='font-medium text-red-600 p-2 text-center'>
          Sorry! An Error Occured!
        </p>
      )}
      <CoinCard key={coins.id} coins={searchedCoins} />
    </>
  );
};

export default App;
