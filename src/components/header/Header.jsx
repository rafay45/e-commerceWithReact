import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ThemeSet } from '../index'
import logo from '../../assets/favicon.png';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <img
            className='md:w-15 w-10'
            src={logo}
            alt="Icon"
          />
          <div className="text-2xl font-bold text-pink-600">HusnaDeals</div>
        </div>

        <div className="hidden md:flex gap-20 text-gray-900 items-center text-lg font-bold">
          <NavLink to=""
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} hover:text-pink-600`}>Home</NavLink>
          <NavLink to="/about"
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} hover:text-pink-600`}>About</NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} hover:text-pink-600`}>Contact</NavLink>
        </div>
        <ThemeSet />
        <div>
          <NavLink to="/cart" className="relative text-gray-900 hover:text-pink-600">
            <ShoppingCart className="inline-block w-5 h-5" />
            <span className="absolute -top-2 -right-3 text-xs bg-pink-600 text-white rounded-full px-1">2</span>
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-gray-900 px-4 pb-4 space-y-2">
          <NavLink to=""
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} block hover:text-pink-600`}>Home</NavLink>
          <NavLink to="/about"
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} block hover:text-pink-600`}
          >About</NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} block hover:text-pink-600`}
          >Contact</NavLink>
          <a href="/cart"
            className={({ isActive }) => `${isActive ? 'text-pink-600' : 'text-gray-900'} block hover:text-pink-600`}
          >Cart</a>
        </div>
      )}
    </nav>
  );
}
