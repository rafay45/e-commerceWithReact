import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-pink-600">Husna</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your one-stop shop for style, savings, and satisfaction.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-pink-500">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/products" className="hover:text-white">All Products</a></li>
            <li><a href="/deals" className="hover:text-white">Deals</a></li>
            <li><a href="/new" className="hover:text-white">New Arrivals</a></li>
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-pink-500">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><NavLink
             to="/about" className={({isActive}) => `${isActive ? 'text-pink-600' : 'text-gray-300'} hover:text-white`}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `${isActive ? 'text-pink-600' : 'text-gray-300'} hover:text-white`}>Contact</NavLink></li>
            <li><NavLink to="/careers" className={`hover:text-white`}>Careers</NavLink></li>
            <li><NavLink to="/faq" className={`hover:text-white`}>FAQs</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-pink-500">Stay Updated</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-transparent hover:text-pink-600 hover:border-2 hover:py-1.5 cursor-pointer text-white py-2 rounded font-semibold text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HusnaDeals. All rights reserved.
      </div>
    </footer>
  );
}
