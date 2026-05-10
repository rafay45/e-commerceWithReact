import { Container, Navbar, Footer, CartProvider } from './components'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div>
      <CartProvider>
        <ScrollToTop />
        <Container>
          <Navbar />
          <Outlet />
          <Footer />
        </Container>
      </CartProvider>
    </div>
  )
}



export default App
