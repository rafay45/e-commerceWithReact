import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
const Home = React.lazy(() => import('./components/screens/Home.jsx'));
const About = React.lazy(() => import('./components/screens/About.jsx'));
const Contact = React.lazy(() => import('./components/screens/Contact.jsx'));
const Cart = React.lazy(() => import('./components/screens/Cart.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="about"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="cart"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </React.Suspense>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
