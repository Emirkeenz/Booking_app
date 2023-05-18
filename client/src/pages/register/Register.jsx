import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
    country: undefined,
    city: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleRegisterChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      console.log(dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details }));
      navigate('/')
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  }

  return (
    <div className='login'>
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <input
          type="phone"
          placeholder="phone"
          id="phone"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleRegisterChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleRegisterClick} className="lButton">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Register