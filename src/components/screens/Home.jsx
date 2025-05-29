import fetchapi from "../../customhook/fetchapi";
export default function Home() {
  const products = fetchapi([]);
  console.log("Products fetched:", products);
  
  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-pink-600">HusnaDeals</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Discover our handpicked collection of 20 featured products just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-200"
          >
            <div className="flex h-48 rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className=" w-full h-full object-center rounded-md mb-4"
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {product.category}
            </h3>
            <p className="text-gray-900 font-bold text-md mb-3">${product.price}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500">Rating: {product.rating.rate}</span>
              <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
            </div>
            <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:py-1.5 cursor-pointer transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
