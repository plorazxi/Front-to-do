import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/Register"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
