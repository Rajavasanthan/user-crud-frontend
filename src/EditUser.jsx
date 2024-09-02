import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const params = useParams();
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
        error.age = "Please enter age greater than 18";
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
        await axios.put(`http://localhost:3000/user/${params.id}`, values);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  let getData = async () => {
    try {
      const userResp = await axios.get(
        `http://localhost:3000/user/${params.id}`
      );
      formik.setValues(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
            <input type="submit" value={"Update"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
