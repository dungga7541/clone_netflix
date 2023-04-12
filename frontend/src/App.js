import { Routes, Route, useNavigate, Redirect, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { toast } from 'react-toastify';
import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";
import { useEffect } from "react";
import HomeAdmin from "./pages/Admin/Home/Home";
import UserList from './pages/Admin/UserList/UserList';
import User from './pages/Admin/User/User';
import NewUser from './pages/Admin/NewUser/NewUser';
import MovieList from './pages/Admin/MovieList/MovieList';
import Movie from './pages/Admin/Movie/Movie';
import NewMovie from './pages/Admin/NewMovie/NewMovie';
import Lists from './pages/Admin/Lists/Lists';
import List from './pages/Admin/List/List';
import NewList from './pages/Admin/NewList/NewList';
import SideBar from "./components/SideBar/SideBar";

function App() {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user && location.pathname.startsWith("/vn/login")) {
  //     navigate("/");
  //     return
  //   }
  //   if (!user && !location.pathname.startsWith("/vn")) {
  //     navigate("/vn/login");
  //     return
  //   }
  // }, [user])
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Navigate to="/vn" replace />} />

        <Route path="/vn/" element={!user ? <Register /> : <Navigate to="/" replace />} />
        <Route path="/vn/login" element={!user ? <Login /> : <Navigate to="/" replace />} />

        {user && (
          <>

            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch/:movieId" element={<Watch />} />
            {user.isAdmin ? 

              (

              <>
                <Route exact path="/admin/" element={<HomeAdmin users={user}/>} />
                <Route path="/admin/users" element={<UserList />} />
                <Route path="/admin/user/:userId" element={<User />} />
                <Route path="/admin/newUser" element={<NewUser />} />
                <Route path="/admin/movies" element={<MovieList />} />
                <Route path="/admin/movie/:movieId" element={<Movie />} />
                <Route path="/admin/newMovie" element={<NewMovie />} />
                <Route path="/admin/lists" element={<Lists />} />
                <Route path="/admin/lists/find/:listId" element={<List />} />
                <Route path="/admin/newlist" element={<NewList />} />
              </>
              ) : navigate("/dasdas")}
          </>
        )}
      </Routes>

    </div>
  );
}

export default App;
