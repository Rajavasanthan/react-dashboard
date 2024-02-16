import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
function BlogEdit() {
  const params = useParams();

  const { handleSubmit, setValues, values, handleChange } = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validate: (values) => {
      console.log(values);
      // if (values.title === "") {
      //   return { title: "Title is required" };
      // }
      // if (values.content === "") {
      //   return { content: "Content is required" };
      // }
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://6461c1c2491f9402f4aa0565.mockapi.io/bank/${params.id}`,
          values
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log

  // let initialValues = {
  //   title: "",
  //   content: "",
  // };

  // let validate = (values) => {
  //   if (values.title === "") {
  //     return { title: "Title is required" };
  //   }
  //   if (values.content === "") {
  //     return { content: "Content is required" };
  //   }
  // };

  let getBlog = async () => {
    try {
      // await setValues({title : "Hiiii",content : "Hello"})
      const blogResp = await axios.get(
        `https://6461c1c2491f9402f4aa0565.mockapi.io/bank/${params.id}`
      );
      await setValues({
        title: blogResp.data.title,
        content: blogResp.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // let onSubmit = async (values) => {
  //   try {
  //     await axios.put(
  //       `https://6461c1c2491f9402f4aa0565.mockapi.io/bank/${params.id}`,
  //       values
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card position-relative">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Edit Blog</h6>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    name="content"
                    rows="3"
                    onChange={handleChange}
                    value={values.content}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={"Submit"}
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
