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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Online Store
      </h1>
      <h3 className="fixed top-20 left-10 text-xl font-mono font-bold backdrop-blur-sm p-2">
        Total: {totalUZS()} UZS
      </h3>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-64 flex flex-col p-2 items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600">{product.price} UZS</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="cursor-pointer mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Products in Cart:
      </h2>

      <ul className="flex gap-4 flex-col">
        {cart.map((item: any) => {
          const product = products.find((p) => p.id == item.productId);

          return (
            <li
              key={item.productId}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="text-lg font-medium text-gray-800">
                  {product?.name} - Quantity: {item.quantity}
                </span>
                <span className="text-lg font-medium text-gray-800">
                  Price: {product?.price} UZS
                </span>
              </div>

              <div className="flex gap-3 text-white">
                <button
                  onClick={() => handleIncrease(item.productId)}
                  className="bg-blue-500 py-1 px-3 rounded-lg cursor-pointer"
                >
                  Increase
                </button>
                <button
                  onClick={() => handleDecrease(item.productId)}
                  className="bg-yellow-500 py-1 px-3 rounded-lg cursor-pointer"
                >
                  Decrease
                </button>
                <button
                  onClick={() => handleRemoveCart(item.productId)}
                  className="bg-red-500 py-1 px-3 rounded-lg cursor-pointer"
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
