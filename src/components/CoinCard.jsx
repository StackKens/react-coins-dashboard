const CoinCard = ({ coins }) => {
  return (
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
  );
};

export default CoinCard;
