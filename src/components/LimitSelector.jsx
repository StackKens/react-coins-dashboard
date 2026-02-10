const LimitSelector = ({ limit, setLimit }) => {
  return (
    <div className='flex items-center gap-2'>
      <p>Limit</p>
      <select
        id='limit'
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className=' outline-0 border border-gray-300 rounded px-3 py-1'
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};

export default LimitSelector;
