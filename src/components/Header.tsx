import { Link } from 'react-router-dom';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 md:flex display justify-between">
      <nav className="container max-w-xs md:py-6 pt-6 px-10">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/" className="text-white">
            Movie Site
          </Link>
        </h1>
      </nav>

      <Search className="max-w-s py-6 px-10" />
    </header>
  );
};

export default Header;
