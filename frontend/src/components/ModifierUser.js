import React, { useState } from "react";
// import * as React from "react";
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
import { Checkbox, Select, MenuItem } from "@mui/material";
import Cookies from "js-cookie";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function ModifierUser({ values, setValues, userNameActual }) {
  console.log("user from modifierUser ", values);
  // setValues(user);

  const [messageErrorMail, setMessageErrorMail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [messageErrorConfirmedPassword, setMessageErrorConfirmedPassword] =
    useState("");
  const [messageErrorPhone, setMessageErrorPhone] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  let informations = {
    name: "",
    prenom: "",
    // phone: "",
    email: "",
    // occupation: "",
    deleted: false,
    role: 0,
    _id: "",
    phone: "",
  };
  const envoyer = () => {
    informations.name = values.name;
    informations.prenom = values.prenom;
    informations.email = values.email;
    informations.occupation = values.occupation;
    informations.phone = values.phone;
    informations._id = values._id;
    informations.role = values.role;
    informations.deleted = values.deleted;
    if (
      (informations.phone != "" ||
        informations.email != "" ||
        informations.occupation != "" ||
        informations.prenom ||
        informations.name ||
        informations.deleted ||
        informations.role) &&
      messageErrorMail == "" &&
      messageErrorPhone == "" &&
      informations._id != ""
    ) {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "x-access-token": Cookies.get("jwt"),
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify(values);

      fetch("http://localhost:5000/modifieradmin", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    } else {
      alert(
        "vous devez spécifier au moins une information à modifier parmi ( numéro de téléphone , email , occupation , mot de passe ,role et l'état )  "
      );
    }
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop == "email") {
      if (event.target.value.length == 0) setMessageErrorMail("");
      else {
        if (!regex.test(event.target.value))
          setMessageErrorMail("Email invalid ! ");
        else setMessageErrorMail("");
      }
    }
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
    if (prop == "phone") {
      if (isNaN(event.target.value))
        setMessageErrorPhone(
          "le numéro de téléphone doit contenir seulement des chiffres!"
        );
      else if (
        (event.target.value.length > 0 && event.target.value.length < 10) ||
        event.target.value.length > 10
      )
        setMessageErrorPhone(
          "le numéro de téléphone doit contenir 10 chiffres!"
        );
      else setMessageErrorPhone("");
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

  const handleAdmin = () => {
    setValues({
      ...values,
      role: values.role === "simple" ? "admin" : "simple",
    });
  };

  const handledeleted = () => {
    setValues({
      ...values,
      deleted: !values.deleted,
    });
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

            <div className="border-2 rounded-xl  m-auto lg:w-1/2 sm:w-2/3 pl-4 pr-8 py-4 text-2xl mt-36">
              <h1 className="text-3xl text-black font-semibold mb-4 text-left">
                Modifier les informations d'un utilisateur
              </h1>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-x-10 ml-2">
                  <div>
                    <TextField
                      fullWidth
                      id="nom"
                      label="Nom"
                      defaultValue={values.name}
                      onChange={handleChange("name")}
                      InputProps={{
                        readOnly: false,
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      id="prenom"
                      label="Prenom"
                      defaultValue={values.prenom}
                      onChange={handleChange("prenom")}
                      InputProps={{
                        readOnly: false,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-occupation">
                      Poste de travaille{" "}
                    </InputLabel>
                    <OutlinedInput
                      required
                      id="outlined-adornment-occupation"
                      value={values.occupation}
                      onChange={handleChange("occupation")}
                      label="Poste de travaille"
                    />
                  </FormControl>
                  <p></p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  <div>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-email">
                        E-mail{" "}
                      </InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-email"
                        value={values.email}
                        onChange={handleChange("email")}
                        label="E-mail"
                      />
                    </FormControl>
                    <p className="text-red-500 text-sm ">{messageErrorMail}</p>
                  </div>
                  <div>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel
                        htmlFor="outlined-adornment-phone"
                        color="success"
                      >
                        Numero de téléphone{" "}
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-phone"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        label="Numero de téléphone"
                      />
                    </FormControl>
                    <p className="text-red-500 text-sm ">{messageErrorPhone}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link to={"/UsersMangement"}>
                <button
                  type="submit"
                  className="border text-xl text-white p-3 bg-blue-700 hover:outline-none hover:ring-2 hover:bg-blue-500 rounded-xl hover:shadow-xl hover:ring-violet-800 hover:scale-105"
                  onClick={envoyer}
                >
                  Modifier
                </button>
                </Link>
                <div className="space-x-2 w-2/3 -px-4 ">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Type utilisateur
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.role}
                      label="Type utilisateur"
                      onChange={handleChange("role")}
                    >
                      <MenuItem value={0}>Admin</MenuItem>
                      <MenuItem value={1}>gestionnaire</MenuItem>
                      <MenuItem value={2}>simple utilisteur</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="space-x-0 self-center">
                  {values.deleted && (
                    <input
                      type="checkbox"
                      id="deleted"
                      onChange={handledeleted}
                    />
                  )}
                  {!values.deleted && (
                    <input
                      type="checkbox"
                      id="deleted"
                      onChange={handledeleted}
                      checked
                    />
                  )}
                  <label htmlFor="delete">Activer</label>
                </div>
              </div>
              <button className="text-white bg-slate-900 p-2 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 mr-12">
                <Link to={"/UsersMangement"}>Retour </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifierUser;
