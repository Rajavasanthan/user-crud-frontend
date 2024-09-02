import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  let getData = async () => {
    try {
      const userResp = await axios.get("http://localhost:3000/users");
      setUsers(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let deleteUser = async (id) => {
    let yesno = confirm("Are you sure do you want to delete this user?");
    if (yesno) {
      await axios.delete(`http://localhost:3000/user/${id}`);
      getData();
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>
            Users{" "}
            <Link to={"/user-create"} className="btn btn-primary">
              Create User
            </Link>
          </h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/user/${user._id}`} className="btn btn-primary">
                        View
                      </Link>{" "}
                      <Link to={`/edit/${user._id}`} className="btn btn-primary">
                        Edit
                      </Link>{" "}
                      <button
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
