import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
