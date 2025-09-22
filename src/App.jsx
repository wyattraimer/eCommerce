import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
