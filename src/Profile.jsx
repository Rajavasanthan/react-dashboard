import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      user.setUsername(values.username);
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type="submit" value={"Submit"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;

// Defination
// example
// real time use case
