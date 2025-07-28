import { useState, useEffect } from 'react'
import './App.css'
import { Container, Navbar, Footer } from './components'
import { SwitcherProvider } from "./components/switcher/switcher"
import { Outlet } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState("light")

  const darktheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <div>
      <SwitcherProvider value={{ theme, darktheme, lightTheme }}>
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
