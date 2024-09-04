import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function UserCreate() {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    validate: (values) => {
      let error = {};

      if (values.name == "") {
        error.name = "Please Enter the name";
      }

      if (values.age < 18) {
        error.age = "Please enter age between 18 & 50";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        /**
         * {
         * name : "User name",
         * age : 20
         * }
         */
        await axios.post("https://user-crud-backend-alzz.onrender.com/user", values);
        navigate("/user")
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <h1>Create User</h1>
          <div className="col-lg-6">
            <label htmlFor="">Name</label>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              className="form-control"
            />
            <span>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              className="form-control"
            />
            <span>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <input type="submit" value={"Submit"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
