import { Routes, Route } from 'react-router-dom'; // No Router here
import Home from './pages/Home';
import Categories from './pages/Categories';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CategoryDetails from './pages/CategoryDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:category" element={<CategoryDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
