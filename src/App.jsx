import { Container, Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  )
}



export default App
