import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search: React.FC<{ className?: string }> = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={props.className}>
      <input type="text" className="border-solid border-2 border-slate-300 p-1 me-3 rounded" placeholder="Enter movie title" value={searchTerm} onChange={handleInputChange} />
      <Link to={`/search_results/${searchTerm}`} key={searchTerm}>
        <button className="bg-sky-500 py-1 px-2 rounded border-sky-500 border-solid border-2 text-white">Search</button>
      </Link>
    </div>
  );
};

export default Search;
