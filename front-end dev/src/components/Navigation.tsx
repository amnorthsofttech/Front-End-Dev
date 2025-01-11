import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import Resetpassword from "./Pages/Resetpassword";
import Send from "./Pages/Send";
function Navigation() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Send" element={<Send />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
      </Routes>
    </>
  );
}

export default Navigation;
