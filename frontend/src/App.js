import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Table from "./components/table";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Modifier from "./components/modifier";
import AjouterSwitch from "./components/AjouterSwitch";
import { useEffect, useState } from "react";
import Add from "./components/Add";

import Loading from "./components/loading";
import Login from "./components/login";

import ConfigurerPorts from "./components/PortSwitch";

import PremierePage from "./components/fist";
import CreateUser from "./components/CreateUser";
import ModiferUser from "./components/ModifierUser";
import UsersMangement from "./components/UsersManagement";
import UserInformations from "./components/UserInformations";
import ModifierPasseword from "./components/ModifierPasseword";
import MotDePasseOublier from "./components/MotDePasseOublier";
import ProfilePersonnel from "./components/ProfilePersonnel";
import Aide from "./components/Aide";
import ForgotPassword from "./components/ForgotPassword";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Confirmation from "./components/Confirmation";
import Statistic from "./components/Statistic"
import Cookies from "js-cookie";
function App() {
  const [users, setUsers] = useState([]);
  const [userAvisualiser, setUserAvisualiser] = useState({
    name: "",
    prenom: "",
    phone: "",
    role: 2,
    deleted: true,
    phone: "",
    occupation: "",
  });

  const [isAuth, setIsAuth] = useState(false);
  const [NbPorts, setNbPorts] = useState(0);
  const [nomSwitch, setNomSwitch] = useState("");
  const [Ports, setPorts1] = useState([]);
  const [Port, setPort] = useState({
    Bloc: "",
    Armoire: "",
    Nom: "",
    Marque: "",
    Modèle: "",
    Adresse_IP: "",
    N_d_inventaire: "",
    N_Serie: "",
    Adresse_MAC: "",
    Nombre_de_ports_F_E: 0,
    Nombre_de_ports_G_E: 0,
    Nombre_de_ports_SFP: 0,
    Etat: false,
  });

  const [user2, setUser2] = useState({});
  useEffect(() => {
    const user = Cookies.get("jwt");
    console.log(user);
    if (user) {
      setIsAuth(true);
    }

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token": Cookies.get("jwt"),
      "Content-Type": "application/json",
    };

    fetch("http://localhost:5000/getCurrentUser", {
      method: "GET",

      headers: headersList,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUser2(data);
        console.log("data de currentUser", data);
      });

    fetch("http://localhost:5000/getusers", {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "x-access-token": Cookies.get("jwt"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("liste of users", data);
        setUsers(data);
      });
  }, []);
  return (

    <Router>
      {!isAuth ? (
        <Switch>
          <Route path={"/"} exact>
         < PremierePage></PremierePage>
          </Route>
          <Route path="/Aide" exact>
              <Aide user2={user2}></Aide>
            </Route>
          <ProtectedRoutes
            isAuth={isAuth}
            exact
            component={Home}
            path="/Home"
          />
          <Route path={"/Login"}>
            {" "}
            <Login isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route path="/ForgotPassword">
            {" "}
            <ForgotPassword></ForgotPassword>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path={"/"} exact>
            <Home user2={user2}></Home>
          </Route>
          <Route path={"/Login"}>
            <Home user2={user2}></Home>
          </Route>
          <Route path={"/Addd"}>
            <div>
              <Link to={"/Login"}>Go to Home</Link>
            </div>
          </Route>
          

          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/AjouterSwitch" exact>
              <AjouterSwitch
                user2={user2}
                setNomSwitch={setNomSwitch}
                NbPorts={NbPorts}
                setNbPorts={setNbPorts}
                setPort={setPort}
              ></AjouterSwitch>
            </Route>
          )}
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/Confirmation">
              <Confirmation
                user2={user2}
                NbPorts={NbPorts}
                Ports={Ports}
                Port={Port}
              ></Confirmation>
            </Route>
          )}
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/ConfigurerPorts">
              <ConfigurerPorts
                user2={user2}
                nomSwitch={nomSwitch}
                NbPorts={NbPorts}
                setPorts1={setPorts1}
              ></ConfigurerPorts>
            </Route>
          )}

        
            <Route path="/Statistic">
              <Statistic user2={user2}></Statistic>
            </Route>
        

          <Route path="/Login" exact>
            <Home user2={user2}></Home>
          </Route>
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/CreateUser" exact>
              <CreateUser userNameActual={user2.name}></CreateUser>
            </Route>
          )}
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/ModiferUser" exact>
              <ModiferUser
                values={userAvisualiser}
                setValues={setUserAvisualiser}
                userNameActual={user2.name}
              ></ModiferUser>
            </Route>
          )}
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/UsersMangement" exact>
              <UsersMangement
                users={users}
                setUsers={setUsers}
                userAvisualiser={userAvisualiser}
                setUserAvisualiser={setUserAvisualiser}
                userNameActual={user2.name}
              ></UsersMangement>
            </Route>
          )}
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/ModifierPasseword" exact>
              <ModifierPasseword user2={user2}></ModifierPasseword>
            </Route>
          )}
            <Route path="/Aide" exact>
              <Aide user2={user2}></Aide>
            </Route>
          
          {(user2.role === 1 || user2.role === 0) && (
            <Route path="/UserInformation" exact>
              <UserInformations user={userAvisualiser}></UserInformations>
            </Route>
          )}
          <Route path="/ProfilePersonnel" exact>
            <ModifierPasseword user={user2} userNameActual={user2.name}></ModifierPasseword>
          </Route>
        </Switch>
      )}
    </Router>
    // <div>
      
    //   <Statistic></Statistic>
    // </div>
    
  );
}

export default App;
