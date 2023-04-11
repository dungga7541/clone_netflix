import React, { useContext, useEffect, useState } from "react";

import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import NewMovie from "./pages/NewMovie/NewMovie";
import MovieList from "./pages/MovieList/MovieList";
import NewList from "./pages/NewList/NewList";
import List from "./pages/List/List";
import Lists from "./pages/Lists/Lists";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import Login from "./pages/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import { AuthContext } from "./context/authContext/authContext";
import NotFound from "./pages/NotFound/NotFound";
import Movie from './pages/Movie/Movie';
import "./App.scss";


function App() {
  const { user } = useContext(AuthContext);
  const location  = useLocation()
  const navigate = useNavigate();

  useEffect(()=>{
    if(user && location.pathname.startsWith("/login")) {
      navigate("/");
      return
    }
    if(!user  && !location.pathname.startsWith("/login")){
      navigate("/login");
      return
    }
  },[user])

  return (
    <div className="App">
      <SideBar users= {user}/>

      <Routes>
      {/* {!user? <Register /> :<Navigate to="/" replace />} */}
        <Route path="/login" element={ <Login />} />
        {user && <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/newMovie" element={<NewMovie />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/lists/find/:listId" element={<List />} />
            <Route path="/newlist" element={<NewList />} />
        </>}
        <Route path="*" element={<NotFound/>} />
      </Routes>
          
    </div>
  );
}

export default App;
