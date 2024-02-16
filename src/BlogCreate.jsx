import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
function BlogCreate() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  let initialValues = {
    title: "",
    content: "",
  };

  let validate = (values) => {
    if (values.title === "") {
      return { title: "Title is required" };
    }

    if (values.content === "") {
      return { content: "Content is required" };
    }
  };

  let onSubmit = async (values) => {
    try {
      const newBlog = await axios.post(
        "https://6461c1c2491f9402f4aa0565.mockapi.io/bank",
        values
      );
      user.setBlogListing([...user.blogListing, newBlog.data]);
      navigate("/portal/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="p-5">
            <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Create a Blog!</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {({ errors, handleChange, handleSubmit, values }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        className={`form-control form-control-user ${
                          errors.title && "border-danger"
                        }`}
                        id="exampleFirstName"
                        placeholder="Blog Title"
                      />
                      {errors.title && <div>{errors.title}</div>}
                    </div>
                    <div className="form-group">
                      <textarea
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        className={`form-control form-control-user ${
                          errors.title && "border-danger"
                        }`}
                        id="exampleLastName"
                        placeholder="Blog Content"
                      ></textarea>
                      {errors.content && <div>{errors.content}</div>}
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                      value={"Create Blog"}
                    />
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCreate;
