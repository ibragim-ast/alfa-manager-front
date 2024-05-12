import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import axios from "axios";
import Login from "./Login/Login";
import AddScreenForm from "./AddScreenForm/AddScreenForm";
import "./App.css";

function App() {
  const handleRegistration = async ({ name, password, role }) => {
    try {
      const responce = axios.post("http://localhost:3001/users", {
        name,
        password,
        role,
      });
      return responce.data;
    } catch (error) {
      console.error("Registration failed: ", error);
      throw error;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegistration} />}
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/addscreen" element={<AddScreenForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
