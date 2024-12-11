import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8">Musical Instruments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-secondary"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
