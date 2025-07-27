import fetchapi from "../../customhook/fetchapi";
import banner from "../../assets/bannerImage.png"
export default function Home() {
  const products = fetchapi([]);
  console.log("Products fetched:", products);

  return (
    <section
      className="bg-gray-100 min-h-screen"
    >
      <div
        className="md:h-96 h-[550px] bg-pink-600 flex flex-wrap justify-around items-center"
      >
        <div
          className="flex flex-col justify-centern items-center w-full md:w-[40%] border-2"
        >
          <h1
            className="text-4xl font-bold"
          >Welcome to
            <span
              className="text-white"
            >HusnaDeals</span>
          </h1>
          <p>From fashion to electronics, find unbeatable deals just a click away.
            Affordable prices, trusted quality, and fast delivery to your doorstep.
            Shop smart, live better – only at HusnaDeals.</p>
        </div>
        <div
          className="md:w-[40%] md:h-80 h-70 flex justify-center w-full"
        >
          <img src={banner} alt="" />
        </div>
      </div>

      <div
        className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
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
            <h3
              className="text-lg font-semibold text-gray-900 mb-1"
            >
              {product.category}
            </h3>
            <p
              className="text-gray-900 font-bold text-md mb-3"
            >${product.price}</p>
            <div
              className="flex items-center justify-between mt-4"
            >
              <span
                className="text-sm text-gray-500"
              >Rating: {product.rating.rate}</span>
              <span
                className="text-sm text-gray-500"
              >({product.rating.count} reviews)</span>
            </div>
            <button
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:py-1.5 cursor-pointer transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
