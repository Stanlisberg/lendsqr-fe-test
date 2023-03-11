import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import UserDetails from "./components/sidebar/UserDetails"
import Users from "./components/sidebar/Users"
import Login from "./components/pages/Login"


function App() {
  return(
    <div>
      {/* <Login /> */}
      <Router>
        <Routes>
         <Route path="/Home" element={<Home />} />
         <Route path="/UserDetails" element={<UserDetails />} />
         <Route path="/Users" element={<Users />} />
         <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
