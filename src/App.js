import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Recipe from './components/Recipe';

// react-router-dom v6
// https://reactrouter.com/docs/en/v6/upgrading/v5

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/show/:id" element={<Recipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
