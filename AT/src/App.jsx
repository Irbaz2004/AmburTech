import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import CustomCursor from "./Components/CustomCursor";
import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
