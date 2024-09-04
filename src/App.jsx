import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import UserCreate from "./UserCreate";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import Register from "./Register";
import Login from "./Login";
import Topbar from "./Topbar";
function App() {
  
  return (
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Users />} />
        <Route path="/user-create" element={<UserCreate />} />
        <Route path="/user/:id" element={<ViewUser />} />
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
