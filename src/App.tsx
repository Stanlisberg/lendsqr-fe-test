import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import User from "./components/sidebar/sidebarPages/User"


function App() {
  return(
    <div>
      <Router>
        <Routes>
         <Route path="/dashboard" element={<Home />} />
          <Route path='/user' element={<User/>} />
         <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
