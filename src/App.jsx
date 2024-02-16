import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./sb-admin-2.css";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Portal from "./Portal";
import Dashboard from "./Dashboard";
import BlogListing from "./BlogListing";
import BlogCreate from "./BlogCreate";
import BlogEdit from "./BlogEdit";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/portal" element={<Portal />}>
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<BlogListing />} />
            <Route path="create-blog" element={<BlogCreate />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-blog/:id" element={<BlogEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
