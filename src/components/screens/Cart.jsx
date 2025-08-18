import { context } from "../index"
import { useContext } from "react"

function Cart() {
  const { cartItems, removeCart } = useContext(context)

  const hanleRemoveCart = (items) => {
       removeCart(items)
  }

  return (
    <div
      className="dark:bg-gray-800"
    >
      {cartItems.length === 0 ? (
        <div
          className="w-full h-70 flex justify-center items-center"
        >
          <h1
            className="md:text-4xl text-2xl font-bold text-gray-300 dark:text-gray-700"
          >Your Cart is empty.</h1>
        </div>
      ) : (
        <div
          className="dark:bg-gray-800"
        >
          {<div
            className="grid grid-cols-2 mt-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-3 max-w-7xl mx-auto"
          >
            {cartItems.map((items) => (
              <div
                key={items.id}
                className="bg-white mb-5 dark:bg-gray-900 p-4 rounded-xl h-50 md:h-90 shadow hover:shadow-lg transition duration-200"
              >
                <div className="flex h-25 md:h-48 rounded-md">
                  <img
                    src={items.image}
                    alt={items.name}
                    className=" w-full dark:bg-gray-200 h-full object-center rounded-md md:mb-4"
                  />
                </div>
                <h3
                  className="md:text-lg text-[15px] font-semibold dark:text-gray-400 md:mb-1  text-gray-900"
                >
                  {items.category}
                </h3>
                <p
                  className="text-gray-900 text-[10px]  md:mb-3 dark:text-gray-400 font-bold md:text-[16px]"
                >${items.price}</p>
                <div
                  className="flex items-center justify-between md:mt-4"
                >
                  <span
                    className="md:text-sm text-[10px] dark:text-gray-400  text-gray-500"
                  >Rating: {items.rating.rate}</span>
                  <span
                    className="md:text-sm text-[10px] dark:text-gray-400 text-gray-500"
                  >({items.rating.count} reviews)</span>
                </div>
                <button
                  onClick={() => hanleRemoveCart(items)}
                  className="w-full bg-pink-600 text-white text-[12px] md:text-[14px] lg:text-[15px] md:py-2 md:rounded-lg rounded hover:bg-transparent hover:text-pink-600 hover:border-2 hover:py-1.5 cursor-pointer transition"
                >
                  Remove from cart
                </button>
              </div>
            ))}
          </div>}
        </div>
      )}
    </div>
  )
}

export default Cart