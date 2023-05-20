import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />  // Render the UserList component when the root path "/" is accessed
        <Route path="add" element={<AddUser />} />  // Render the AddUser component when the "/add" path is accessed
        <Route path="edit/:id" element={<EditUser />} />  // Render the EditUser component when a path starting with "/edit/" followed by an ID is accessed
      </Routes>
    </BrowserRouter>
  );
}

export default App;
