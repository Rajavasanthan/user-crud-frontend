import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.email) {
        error.email = "Please enter the email";
      }

      if (!values.username) {
        error.username = "Please enter the username";
      }

      if (!values.password || values.password.length < 3) {
        error.password = "Please enter the valid password";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/register", values);
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
     <form onSubmit={formik.handleSubmit}>
     <div className="row">
        <h1>Register</h1>
        <div className="col-lg-12">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="form-control"
          />
          <span>{formik.errors.username}</span>
        </div>
        <div className="col-lg-6">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control"
          />
          <span>{formik.errors.email}</span>
        </div>
        
        <div className="col-lg-6">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
          />
          <span>{formik.errors.password}</span>
        </div>
        <div className="col-lg-12 mt-2">
          
          <input
            type="submit"
            value={"Register"}
            className="btn btn-primary"
          />
        </div>
      </div>
     </form>
    </div>
  );
}

export default Register;
