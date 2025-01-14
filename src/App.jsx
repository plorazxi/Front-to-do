import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './index.css'
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
