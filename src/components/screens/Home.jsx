import fetchapi from "../../customhook/fetchapi";
import banner from "../../assets/bannerImage.png"
import { useRef } from "react";
export default function Home() {
  const products = fetchapi([]);
  console.log("Products fetched:", products);

  const reference = useRef(null)

  const handleClick = () => {
    reference.current.scrollIntoView({ behavior: "smooth" })
  }
  

  return (
    <section
      className="bg-gray-100 min-h-screen"
    >
      <div
        className="md:h-96 h-[400px] md:bg-pink-600 flex flex-wrap justify-center items-center"
      >
        <div
          className="flex flex-col justify-center md:items-start h-50 md:h-70 items-center w-full md:w-[40%]"
        >
          <h1
            className="text-3xl md:text-5xl font-bold text-black"
          >Welcome to <span
            className="md:text-white text-pink-600"
          >HusnaDeals</span>
          </h1>
          <p className="text-black text-[14px] md:text-white mt-2 px-4 md:text-xl">From fashion to electronics, find unbeatable deals just a click away.
            Affordable prices, trusted quality, and fast delivery to your doorstep.
            Shop smart, live better – only at HusnaDeals.</p>
          <button
            onClick={handleClick}
            className="bg-pink-500 font-bold hover:cursor-pointer hover:bg-pink-400 mt-2 text-white px-4 md:px-5 md:text-xl text-xs py-2 rounded-xl shadow-2xl "
          >Order Now</button>
        </div>
        <div
          className="md:w-[40%] md:h-80 h-50 flex justify-center w-full"
        >
          <img src={banner} alt="Here's an image" />
        </div>
      </div>

      <div
       ref={reference}
        className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
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
