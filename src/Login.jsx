import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.email) {
        error.email = "Please Enter the email";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:3000/login", values);
        if (resp.status == 200) {
          window.localStorage.setItem("mytoken",resp.data.message)
          navigate("/user");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type="submit" value={"Login"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
