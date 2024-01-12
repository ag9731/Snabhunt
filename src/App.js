import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Test from "./screens/Test";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginscreen setUser={setUser} />} />
          {/* <Route path="/home" element={<Homescreen />} /> */}
          <Route
            path="/home"
            element={user ? <Navigate to="/" /> : <Homescreen />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
