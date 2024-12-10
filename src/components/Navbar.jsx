import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Music Shop
          </Link>
          <Link
            to="/cart"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="ml-1 bg-blue-600 text-white rounded-full px-2 py-1 text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
