import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { registerUser, isUserExists } from "../../api/common";

import register from "../../assets/Register.png";

import { CssBaseline } from "@material-ui/core";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Register(props) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // CHECK IF USER IS LOGGED IN OR NOT
  useEffect(() => {
    isUserExists().then((data) => {
      if (data) {
        navigate("/");
      }
    });

  }, [navigate]);

  // GENERATE THE ERROR MESSEAGES WITH TOASTER
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  // HANDLE THE REGISTERATION OF THE USER
  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(values).then((data) => {
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

      <MenuItem onClick={() => navigate(-1)}  sx={{ position: "absolute", top: "10px", left: "10px" }} >
        <ArrowLeftIcon
          sx={{
            height: "40px",
            width: "40px",
            color: "black",
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
         color:'black' }}
        
      >
        Tourist Guide
      </MenuItem>

      <div className="contain">
        <div className="form-container">
          <div className="form-content">
            <h2>Register Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="formControl">
                <label htmlFor="name">
                  <BorderColorIcon />
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
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
                <button type="submit">Register</button>
                <span style={{ margin: "20px" }}>
                  Already have an account ?<Link to="/login"> Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="banner1">
          <div className="banner-content">
            <h1>Explore</h1>
            <p>Already have an account, to go site</p>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
          <div className="banner-logo">
            <img src={register} alt="logo" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
