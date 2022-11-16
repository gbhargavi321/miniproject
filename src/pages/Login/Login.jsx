import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../../api/common";
import { isUserExists } from "../../api/common";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

import login from "../../assets/Login.png";


import { CssBaseline } from "@material-ui/core";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MenuItem from "@mui/material/MenuItem";

function Login(props) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    isUserExists().then((data) => {
      if (data) {
        navigate("/");
      }
    });
  }, [navigate]); 

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(values).then((data) => {
      if (data.errors) {
        const { email, password } = data.errors;
        if (email) generateError(email);
        else if (password) generateError(password);
      } else {
        localStorage.setItem("x-token", data.token);
        navigate("/search");
      }
    });
  };



  return (
    <>
      <CssBaseline />

      <MenuItem
        onClick={() => navigate(-1)}
        sx={{ position: "absolute", top: "10px", left: "10px" }}
      >
        <ArrowLeftIcon
          sx={{
            height: "40px",
            width: "40px",
            color: { xs: "black", md: "white" },
          }}
        />
      </MenuItem>

      <MenuItem
        onClick={() => navigate('/')}
        sx={{ position: "absolute",
         top: "16px", 
         left: "80px",
         fontSize:'1.4em',
         letterSpacing:'1px',
         fontWeight:'600',
         color: { xs: "black", md: "white" }, }}
        
      >
        Tourist Guide
      </MenuItem>

      <div className="contain">
        <div className="banner">
          <div className="banner-content">
            <h1>New here?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, voluptate.
            </p>
            <button onClick={()=>navigate('/register')}>SignUp</button>
          </div>
          <div className="banner-logo">
            <img src={login} alt="logo" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-content">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="formControl">
                <label htmlFor="email">
                  <PersonIcon />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="formControl">
                <label htmlFor="password">
                  <LockIcon />
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="btns">
                <button type="submit">Login</button>
                <span style={{ margin: "20px" }}>
                  Don't have an account?<Link to="/register"> Register</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="contain">
    
          <div className="screen-fit">
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <button type="submit">Submit</button>
              <span>
                Don't have an account?<Link to="/register"> Register</Link>
              </span>
            </form>
          </div>
     
      </div> */}
      <ToastContainer />
    </>
  );
}

export default Login;
