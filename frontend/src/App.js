import { Routes, Route, useNavigate, Redirect, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Watch from './pages/User/Watch/Watch';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import { toast } from 'react-toastify';
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext/authContext";
import HomeAdmin from "./pages/Admin/Home/Home";
import Register from "./pages/Register/Register";
import Search from "./pages/User/Search/Search";


function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/*" exact element={user ? <Home /> : <Navigate to="/vn" replace />} />

        <Route path="/vn" element={<LandingPage />} />
        <Route path="/vn/register" element={<Register />} />
        <Route path="/vn/login" element={!user ? <Login /> : <Navigate to="/" replace />} />

        {user && (
          <>
            <Route path="/watch/" element={<Watch />} />

            {user.isAdmin ?
              (
                <>
                  <Route exact path="/admin//*" element={<HomeAdmin users={user} />} />
                  {/* <Route path="/admin/users" element={<UserList />} />
                  <Route path="/admin/user/:userId" element={<User />} />
                  <Route path="/admin/newUser" element={<NewUser />} />
                  <Route path="/admin/movies" element={<MovieList />} />
                  <Route path="/admin/movie/:movieId" element={<Movie />} />
                  <Route path="/admin/newMovie" element={<NewMovie />} />
                  <Route path="/admin/lists" element={<Lists />} />
                  <Route path="/admin/lists/find/:listId" element={<List />} />
                  <Route path="/admin/newlist" element={<NewList />} /> */}
                </>
              ) : <Navigate to="/" replace />}
          </>
        )}
      </Routes>

    </div>
  );
}

export default App;
