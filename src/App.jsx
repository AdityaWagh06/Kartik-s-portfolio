import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
