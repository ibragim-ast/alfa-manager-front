import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Register from "./components/Register/Register";
import AddScreenForm from "./components/AddScreenForm/AddScreenForm";
import AddAdvertisementForm from "./components/AddAdvertisementForm/AddAdvertisementForm";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [screens, setScreens] = useState([]);

  const handleAddScreen = async ({ name, location, price, blockDuration }) => {
    try {
      const response = await axios.post("http://localhost:3001/screens", {
        name,
        location,
        price,
        blockDuration,
      });
      return response.data;
    } catch (error) {
      console.error("Add screen failed: ", error);
      throw error;
    }
  };

  const handleAddAdvertisement = async ({
    name,
    customer,
    duration,
    discount,
    startDate,
    endDate,
    isActive,
    isFree,
    screenId,
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/advertisements",
        {
          name,
          customer,
          duration,
          discount,
          startDate,
          endDate,
          isActive,
          isFree,
          screenId,
        }
      );

      return response.data;
    } catch (error) {
      console.error(
        "Add advertisement failed: ",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const getAllScreens = async () => {
    try {
      const response = await axios("http://localhost:3001/screens");
      console.log();
      setScreens(response.data.screens);
    } catch (error) {
      console.error("Failed to fetch screens: ", error);
    }
  };

  const handleDeleteScreen = async (screenId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/screens/${screenId}`
      );
      console.log(response.data);
      getAllScreens();
    } catch (error) {
      console.error("Failed to delete screen: ", error);
    }
  };

  useEffect(() => {
    getAllScreens();
  }, []);

  const handleRegistration = async ({ name, password, role }) => {
    try {
      const response = await axios.post("http://localhost:3001/users/signup", {
        name,
        password,
        role,
      });
      return response.data;
    } catch (error) {
      console.error("Registration failed: ", error);
      throw error;
    }
  };

  const handleLogin = async ({ name, password }) => {
    try {
      const response = await axios.post("http://localhost:3001/users/signin", {
        name,
        password,
        role,
      });
      setRole(response.data.role);
      setLoggedIn(true);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Login failed: ", error);
      throw error;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout screens={screens} onDeleteScreen={handleDeleteScreen} />
            }
          />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegistration} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/addscreen"
            element={<AddScreenForm addScreen={handleAddScreen} />}
          />
          <Route
            path="/advertisement"
            element={
              <AddAdvertisementForm
                screens={screens}
                addAdvertisement={handleAddAdvertisement}
              />
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
