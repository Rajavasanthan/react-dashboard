import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Vasanth");
  const [blogListing,setBlogListing] = useState([])
  return (
    <UserContext.Provider value={{ username, setUsername,blogListing,setBlogListing }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
