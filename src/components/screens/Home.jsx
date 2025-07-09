import fetchapi from "../../customhook/fetchapi";
import banner from "../../assets/banner.jpg"
export default function Home() {
  const products = fetchapi([]);
  console.log("Products fetched:", products);

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="w-full h-96 mx-auto text-center mb-10">
        <img
        className="h-96 w-screen"
          src={ banner }
          alt="" />
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
