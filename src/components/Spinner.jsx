import { BarLoader } from 'react-spinners';

const override = {
  margin: '7px auto',
  padding: '10px',
};
const Spinner = ({ color = 'gray' }) => {
  return (
    <div>
      <BarLoader color={color} size={60} cssOverride={override} />
    </div>
  );
};

export default Spinner;
