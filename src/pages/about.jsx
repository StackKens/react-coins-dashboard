import { Link } from 'react-router';
const AboutPage = () => {
  return (
    <div className='max-w-3xl mx-auto px-6 py-10 '>
      <h1 className='text-3xl font-bold mb-4'>About This Project</h1>

      <p className='text-gray-600 mb-4'>
        Crypto Dashboard is a responsive React application that fetches live
        cryptocurrency data from the CoinGecko API.
      </p>

      <p className='font-semibold mb-2'>Users can:</p>

      <ul className='list-disc list-inside text-gray-700 mb-6 space-y-1'>
        <li>View top cryptocurrencies by market cap</li>
        <li>Search coins by name or symbol</li>
        <li>Filter results by limit</li>
        <li>Monitor 24-hour price changes</li>
        <li>Explore real-time market statistics</li>
      </ul>

      <p className='font-semibold mb-2'>
        The goal of this project was to strengthen skills in:
      </p>

      <ul className='list-disc list-inside text-gray-700 mb-6 space-y-1'>
        <li>API consumption with async/await</li>
        <li>Error and loading state handling</li>
        <li>React Router (Declarative Routing)</li>
        <li>Component reusability</li>
        <li>Responsive layouts with Tailwind CSS</li>
      </ul>

      <Link
        to='/'
        className='inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
