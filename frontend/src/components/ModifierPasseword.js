import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const ModifierPasseword = ({user  , userNameActual}) => {
  console.log("user from modifierPAssword" , user ) ; 
  // fetch("http://localhost:5000/getCurrentUser")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setUser(data);
  //     console.log(data);
  //   });

  const handleMouseConfirmedPassword = () => {
    if (
      values.confirmedPassword != values.password &&
      values.confirmedPassword.length != 0
    )
      setMessageErrorConfirmedPassword("vérifier le mot de passe confirmé   ");
  };

  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  // const [user, setUser] = useState({
  //   name: "youcef",
  //   phone: "0698048172",
  //   email: "jchjdhchjhjfv@jrhfjrh.hrfhr",
  //   occupation: "teacher for you ",
  //   role: true,
  //   deleted: false,
  //   _id: "",
  // });
  const [messageErrorConfirmedPassword, setMessageErrorConfirmedPassword] =
    useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [values, setValues] = useState({
    password: "",

    showPassword: false,
    confirmedPassword: "",
    showConfirmedPassword: false,
  });
  let informations = {
    password: "",
    _id: "",
  };
  const envoyer = () => {
    // fetch("http://localhost:5000/getCurrentUser")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     console.log(data);
    //   });
    informations.password = values.password;
    informations._id = user._id;

    if (informations._id != "" && informations.password != "") {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "x-access-token": Cookies.get('jwt') ,
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify(informations);
       
       fetch("http://localhost:5000/modifierPassword", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       }).then(function(response) {
         return response.json();
       }).then(function(data) {
         console.log(data);
       })

    } else {
      alert("vous devez spécifier le nouveau mot de pase   ");
    }
    console.log("yaw arwa7 chouf", values);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if (prop == "password") {
      if (event.target.value.length > 0 && event.target.value.length < 8)
        setMessageErrorPassword(
          "Le mot de passe doit contenir au moins 8 caractères "
        );
      else {
        setMessageErrorPassword("");
      }
    }
    if (prop == "confirmedPassword") {
      if (values.password.length == 0 && event.target.value.length != 0)
        setMessageErrorConfirmedPassword("vous devez définir le mot de passe ");
      else {
        if (
          values.password.length < event.target.value.length ||
          values.password.slice(0, event.target.value.length) !=
            event.target.value
        )
          setMessageErrorConfirmedPassword(
            "vérifier le mot de passe confirmé   "
          );
        else setMessageErrorConfirmedPassword("");
      }
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmedPassword = () => {
    setValues({
      ...values,
      showConfirmedPassword: !values.showConfirmedPassword,
    });
  };

  const handleMouseDownConfirmedPassword = (event) => {
    event.preventDefault();
  };

  return (

    
<div className="App">
      <div className="App  " style={{ height: "100vh" }}>
        <div className="flex" style={{ height: "100vh" }}>
          <Navbar />
          <div
            style={{ height: "100vh" }}
            className="scrollbar w-full overflow-auto "
          >
            <SideBar
              image="./../images/image01.png"
              nom={userNameActual}
              titre="Acceuil"
            />


<div>
      <button className="text-white text-xl  bg-slate-900 p-3 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 top-0 mt-20">
        <Link to={"/Login"}>Retour </Link>
      </button>
      <div className="lg:w-1/2 sm:w-5/6 text-black  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-2xl shadow-black space-y-6 mt-20">
        
        <h1 className="text-4xl text-center text-purple-700">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            focused
            color="secondary"
            id="outlined-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Prénom"
            defaultValue={user.prenom}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Numero de telephone"
            defaultValue={user.phone}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            color="secondary"
            focused
            fullWidth
            id="outlined-read-only-input"
            label="poste de travaille "
            defaultValue={user.occupation}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Role"
            defaultValue={
              user.role == 0
                ? "admin"
                : user.role == 1
                ? "gestionnaire"
                : "simple utilisateur"
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Etat"
            defaultValue={user.deleted == true ? "desactivé" : "activé"}
            InputProps={{
              readOnly: true,
            }}
          />
         
        </div>
        <h1 className="text-4xl text-center text-purple-700">
          Modifier password{" "}
        </h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 -ml-2">
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">{messageErrorPassword}</p>
          </div>
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-confirmedPassword">
                Confirmed Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-confirmedPassword"
                type={values.showConfirmedPassword ? "text" : "password"}
                value={values.ConfirmedPassword}
                onChange={handleChange("confirmedPassword")}
                onBlur={handleMouseConfirmedPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmedPassword}
                      onMouseDown={handleMouseDownConfirmedPassword}
                      edge="end"
                    >
                      {values.showConfirmedPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirmed Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">
              {messageErrorConfirmedPassword}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="border text-xl text-white p-3 bg-blue-700 hover:outline-none hover:ring-2 hover:bg-blue-500 rounded-xl hover:shadow-xl hover:ring-violet-800 hover:scale-105"
          onClick={envoyer}
        >
          Modifier
        </button>
      </div>
    </div>
          
            
          </div>
        </div>
      </div>
    </div>

  /*  <div>
      <button className="text-white text-xl  bg-slate-900 p-3 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 top-0">
        <Link to={"/Login"}>Retour </Link>
      </button>
      <div className="lg:w-1/2 sm:w-5/6 text-black  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-2xl shadow-black space-y-6 ">
        
        <h1 className="text-4xl text-center text-purple-700">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            focused
            color="secondary"
            id="outlined-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Prénom"
            defaultValue={user.prenom}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Numero de telephone"
            defaultValue={user.phone}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            color="secondary"
            focused
            fullWidth
            id="outlined-read-only-input"
            label="poste de travaille "
            defaultValue={user.occupation}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Role"
            defaultValue={
              user.role == 0
                ? "admin"
                : user.role == 1
                ? "gestionnaire"
                : "simple utilisateur"
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Etat"
            defaultValue={user.deleted == true ? "desactivé" : "activé"}
            InputProps={{
              readOnly: true,
            }}
          />
         
        </div>
        <h1 className="text-4xl text-center text-purple-700">
          Modifier password{" "}
        </h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 -ml-2">
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">{messageErrorPassword}</p>
          </div>
          <div>
            <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-confirmedPassword">
                Confirmed Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-confirmedPassword"
                type={values.showConfirmedPassword ? "text" : "password"}
                value={values.ConfirmedPassword}
                onChange={handleChange("confirmedPassword")}
                onBlur={handleMouseConfirmedPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmedPassword}
                      onMouseDown={handleMouseDownConfirmedPassword}
                      edge="end"
                    >
                      {values.showConfirmedPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirmed Password"
              />
            </FormControl>
            <p className="text-red-500 text-sm ">
              {messageErrorConfirmedPassword}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="border text-xl text-white p-3 bg-blue-700 hover:outline-none hover:ring-2 hover:bg-blue-500 rounded-xl hover:shadow-xl hover:ring-violet-800 hover:scale-105"
          onClick={envoyer}
        >
          Modifier
        </button>
      </div>
    </div>*/
  );
};

export default ModifierPasseword;









    