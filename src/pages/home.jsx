import logo from '/favicon.png';
import CoinCard from '../components/CoinCard';
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import LimitSelector from '../components/LimitSelector';
import Spinner from '../components/Spinner';
const HomePage = ({
  coins,
  loading,
  error,
  limit,
  search,
  setSearch,
  setLimit,
}) => {
  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase().trim()),
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
      <div>
        <Header />
      </div>
      <div className='px-4 pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6'>
        <div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white max-w-sm  focus-within:border-blue-500'>
          <FaSearch size={16} className='text-gray-400' />
          <input
            type='text'
            placeholder='Search coins by name or symbol'
            className='flex-1 text-sm outline-none bg-transparent '
            value={search}
            onChange={searchCoins}
          />
        </div>

        <div className='px-5'>
          <LimitSelector limit={limit} setLimit={setLimit} />
        </div>
      </div>

      {loading && <Spinner />}
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

export default HomePage;
