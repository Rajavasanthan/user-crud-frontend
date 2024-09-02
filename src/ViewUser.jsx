import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  let params = useParams();
  let [user, setUser] = useState({});
  let getData = async () => {
    try {
      const userResp = await axios.get(
        `https://user-crud-backend-alzz.onrender.com/user/${params.id}`
      );
      setUser(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <h1>{user.name}</h1>
            <p>Age : {user.age}</p>
        </div>
    </div>
  </div>;
}

export default ViewUser;
