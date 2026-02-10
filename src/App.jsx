import { useState, useEffect } from 'react';
import logo from '/favicon.png';
import CoinCard from './components/CoinCard';
import { FaSearch } from 'react-icons/fa';
import LimitSelector from './components/LimitSelector';
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

  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <>
      <div className='flex space-x-4 gap-4 px-6 py-3 items-center bg-neutral-200'>
        <img
          src={logo}
          alt='crypto-dashboard-logo'
          className='w-10 h-10  rounded-lg'
        />
        <h1 className='text-black-900 font-bold text-2xl  '>
          Crypto Dashboard
        </h1>
      </div>

      <div className='px-4 pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6'>
        <div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white max-w-sm  focus-within:border-blue-500'>
          <FaSearch size={16} className='text-gray-400' />
          <input
            type='text'
            placeholder='Search coins by name'
            className='flex-1 text-sm outline-none bg-transparent '
            value={search}
            onChange={searchCoins}
          />
        </div>

        <div className='px-5'>
          <LimitSelector limit={limit} setLimit={setLimit} />
        </div>
      </div>

      {loading && <p className='p-4'>Loading...</p>}
      {error && (
        <p className='font-medium text-red-600 p-2 text-center'>
          Sorry! An Error Occured!
        </p>
      )}

      <CoinCard
        key={coins.id}
        coins={searchedCoins}
        searchedCoins={searchedCoins}
      />
    </>
  );
};

export default App;
