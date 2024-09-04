import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedin] = useState(true);
  let logout = () => {
    window.localStorage.removeItem("mytoken");
    setLoggedin(false);
    navigate("/");
  };
  useEffect(() => {
    let token = window.localStorage.getItem("mytoken");
    if (token) {
      setLoggedin(true);
    }else{
        setLoggedin(false)
    }
  }, []);
  return (
    <div>
      {isLoggedIn && (
        <button className="btn btn-danger btn-sm" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Topbar;
