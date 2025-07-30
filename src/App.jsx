import { useState, useEffect } from 'react'
import { Container, Navbar, Footer } from './components'
import { SwitcherProvider } from "./components/switcher/switcher"
import { Outlet } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState("light")


  let getStorage = localStorage.getItem('themeToggle')
  

  const darkTheme = () => {
       setTheme(getStorage)
  }

    const lightTheme = () => {
       setTheme('light')
    }

    return (
      <div>
        <SwitcherProvider value={{ theme, darkTheme, lightTheme }}>
          <Container>
            <Navbar />
            <Outlet />
            <Footer />
          </Container>
        </SwitcherProvider>
      </div>
    )
  }



  export default App
