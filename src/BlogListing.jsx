import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs, deleteBlog } from "./reducers/blog-reducer";
// import UserContext from "./UserContext";

function BlogListing() {
  // const user = useContext(UserContext);
  // const [blogList, setBlogList] = useState([]);

  const dispatch = useDispatch();

  // We are reading all the information from the store
  const data = useSelector((state) => state.app);
  console.log(data);

  let getData = async () => {
    try {
      const blogData = await axios.get(
        "https://6461c1c2491f9402f4aa0565.mockapi.io/bank"
      );
      dispatch(setBlogs(blogData.data)); // Pura
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let onDelete = async (id) => {
    try {
      const rep = confirm("Are you sure you want to delete this blog?");
      if (rep) {
        await axios.delete(
          `https://6461c1c2491f9402f4aa0565.mockapi.io/bank/${id}`
        );
        // getData();
        dispatch(deleteBlog({ id }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          <a href="https://datatables.net">official DataTables documentation</a>
          .
        </p>
        <Link
          to="/portal/create-blog"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create Blog
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {data.blogs.map((blog, index) => {
                  return (
                    <tr key={index}>
                      <td>{blog.title}</td>
                      <td>
                        <Link to={`/portal/edit-blog/${blog.id}`}>Edit</Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onDelete(blog.id)}
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
    </div>
  );
}

export default BlogListing;
