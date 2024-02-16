import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      return state;
    },
    addBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      return state;
    },
    deleteBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id == action.payload.id
      );
      state.blogs.splice(index, 1);
      return state;
    },
    editBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id == action.payload.id
      );
      state.blogs[index] = action.payload;
      return state;
    },
  },
});

export const { addBlog, setBlogs, deleteBlog } = blogSlice.actions;
