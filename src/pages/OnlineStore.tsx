import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, increase, decrease } from "../store/cartSlice";

import Cart from "../cart.json";

const OnlineStore: FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts(Cart.fruits);
  }, []);

  function handleAddToCart(productId: number) {
    dispatch(addToCart(productId));
  }

  function handleRemoveCart(productId: number) {
    dispatch(removeCart(productId));
  }

  function handleIncrease(productId: number) {
    dispatch(increase(productId));
  }

  function handleDecrease(productId: number) {
    dispatch(decrease(productId));
  }

  function totalUZS() {
    let total = 0;
    cart.forEach((item: any) => {
      const product = products.find((p) => p.id == item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    });
    return total;
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-wider drop-shadow-md">
        Online Store
      </h1>
      <h3 className="fixed top-20 left-10 text-xl font-mono font-bold text-white backdrop-blur-sm p-3 rounded-lg shadow-lg">
        Total: {totalUZS()} UZS
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-72 flex flex-col items-center bg-white p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-xl text-gray-600 mb-4">{product.price} UZS</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="w-full bg-blue-600 text-white py-3 px-5 rounded-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Products in Cart:
      </h2>

      <ul className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        {cart.map((item: any) => {
          const product = products.find((p) => p.id == item.productId);

          return (
            <li
              key={item.productId}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-6">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <span className="text-lg font-medium text-gray-800">
                  {product?.name} - Quantity: {item.quantity}
                </span>
                <span className="text-lg font-medium text-gray-800">
                  Price: {product?.price} UZS
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleIncrease(item.productId)}
                  className="bg-blue-600 py-2 px-5 rounded-lg cursor-pointer text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Increase
                </button>
                <button
                  onClick={() => handleDecrease(item.productId)}
                  className="bg-yellow-600 py-2 px-5 rounded-lg cursor-pointer text-white hover:bg-yellow-700 transition-colors duration-300"
                >
                  Decrease
                </button>
                <button
                  onClick={() => handleRemoveCart(item.productId)}
                  className="bg-red-600 py-2 px-5 rounded-lg cursor-pointer text-white hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OnlineStore;
