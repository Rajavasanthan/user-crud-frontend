import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import UserCreate from "./UserCreate";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user-create" element={<UserCreate />} />
        <Route path="/user/:id" element={<ViewUser />} />
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
