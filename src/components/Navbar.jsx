import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-70">
      
      <div
        className="text-2xl font-bold text-red-600 cursor-pointer"
        onClick={() => navigate('/')}
      >
        Kartik
      </div>
      
      <div className="flex space-x-6 text-lg">
        <button
          onClick={() => navigate('/about')}
          className="hover:text-red-600 transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="hover:text-red-600 transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
