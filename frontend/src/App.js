import { Routes, Route, useNavigate, Redirect,Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { toast } from 'react-toastify';
import { useContext } from "react";



function App() {
  const user =true;
  // const {user} =useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={user? <Home /> :<Navigate to="/vn" replace /> } />

        <Route path="/vn/" element={!user? <Register /> :<Navigate to="/" replace />} />
        <Route path="/vn/login" element={!user? <Login /> :<Navigate to="/" replace />} />

        {user &&(
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>

    </div>
  );
}

export default App;
