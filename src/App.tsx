import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import SingleMovie from './components/SingleMovie';
import SearchResults from './components/SearchResults';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/search_results/:title" element={<SearchResults />} />
        </Routes>
    </Router>
  );
};

export default App;
