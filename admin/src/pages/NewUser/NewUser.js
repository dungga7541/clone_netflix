import React, { useState,useNavigate} from 'react';
import axios from 'axios';

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const navigate =useNavigate();
  const setHandleChange = ({ currentTarget: input }) => {
    // setData({...DataTransfer,[input:username]:input.value})
  }
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();
      await axios.post("http://localhost:8000/auth/register", { username,email,password})
      navigate("/login")
    } catch (error) {
			console.log(error);
      navigate("/login")
		}
	};

  return (
    <div >
      <form>
        <h1>Create Account</h1>
        <input
          placeholder='username'
          name='username'
          onChange={(event) => { setUsername(event.target.value) }}
          required
        />
        <input
          placeholder='email'
          name='email'
          onChange={(event) => { setEmail(event.target.value) }}
          required
        />
        <input
          placeholder='password'
          name='password'
          onChange={(event) => { setPassword(event.target.value) }}
          required
        />
        <button type="submit" onClick={handleSubmit}>Add New User</button>
      </form>
    </div>
  );
};

export default NewUser;
