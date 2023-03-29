import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import User from "./components/sidebar/sidebarPages/User";
import { LendsqrProvider } from "./components/context/LendsqrContext";

function App() {
  return (
    <div>
      <LendsqrProvider>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </LendsqrProvider>
    </div>
  );
}
export default App;
