import { Container, Navbar, Footer, CartProvider } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <CartProvider>
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
