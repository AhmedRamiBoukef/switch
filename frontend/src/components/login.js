import background from "./../img/site-background.jpg";
import { useState, useEffect } from "react";
import esi from "./../img/esi.jpg";
import Cookies from "js-cookie";
import Home from "./Home";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Image from "../images/forgotpasswordback.jpg";

import {
  Group,
  Search,
  Add,
  Help,
  ExpandLess,
  ExpandMore,
  ChangeHistory,
  History,
  Router,
  ArrowLeftRounded,
} from "@material-ui/icons";

const Login = (props) => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorsOrId, setErrorsOrId] = useState({});
  const [stat, setStat] = useState(400);
  const [test, setTest] = useState(false);
  const [valide, setValide] = useState(false);
  const [loading, setLoading] = useState(false);
  //  console.log((useContext(LoginContext)).isAuth) ;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(formValues) ;
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  let st = 400;
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues); //this the place were we are after validating the info of the user
      let headersList = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: `${formValues.email}`,
        password: `${formValues.password}`,
      });
      setLoading(true);
      fetch("http://localhost:5000/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      })
        .then(function (response) {
          // console.log(response.status)
          st = response.status;
          console.log(st);
          setStat(response.status);
          return response.json();
        })
        .then(function (data) {
          console.log(data.token);

          setErrorsOrId(data);
          //  console.log(st) ;
          if (st === 200) {
            //  console.log("le bloc 200") ;
            setTest(true);
            setValide(true);
            props.setIsAuth(true);
            Cookies.set("jwt", `${data.token}`);
          } else {
            setValide(false);
          }
        });
      setLoading(false);
      console.log("tout est valide");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email obligatoire!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email incorrect";
    }
    if (!values.password) {
      errors.password = "Mot de passe obligatoire";
    } else if (values.password.length < 4) {
      errors.password = "Mot de passe tres court";
    } else if (values.password.length > 20) {
      errors.password = "Mot de passe tres long";
    }
    return errors;
  };

  // function test()
  // {
  //   let headersList = {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json"
  //    }

  //    let bodyContent = JSON.stringify({
  //        "email": "ka_boukef@esi.dz",
  //        "password": " l~HA5DgWvc"
  //    });

  //    fetch("http://localhost:5000/login", {
  //      method: "POST",
  //      body: bodyContent,
  //      headers: headersList
  //    }).then(function(response) {
  //     // console.log(response.status)
  //     setStat(response.status) ;
  //     return response.json();
  //   }).then(function(data) {

  //     console.log(data);
  //     setErrorsOrId(data) ;

  //    //  console.log(Cookies.jwt)
  //    //  console.log(Cookies) ;
  //   })
  // }
  return (
    // <div>
    //   <button onClick={test}>cliquer ici</button>
    // </div>
    <div
      className="bg-cover relative flex md:justify-center  md:items-center"
      style={{ backgroundImage: `url(${Image})`, height: "100vh" }}
    >
      <div className="  flex sm:w-full md:w-4/5  lg:w-1/2 ">
        <div
          className="  shadow-xl shadow-gray-500/75 w-1/2  bg-cover "
          style={{
            backgroundImage: `url(${esi})`,
            borderBottomLeftRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
        ></div>
        {/* <div>{Object.keys(formErrors).length === 0 && isSubmit ?<div>hello</div>:<div>hello world</div>}</div> */}
        <div
          style={{
            borderBottomRightRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          className=" shadow-xl bg-white shadow-gray-500/75  py-4  md:w-1/2  relative     "
        >
          <div className="flex justify-center mb-14">
            <h1 className="font-bold text-4xl ">Connexion</h1>
          </div>
          {!valide && (
            <p className=" w-full  font-bold text-center text-red-500 m-2">
              {errorsOrId.errors}
            </p>
          )}

          {!props.isAuth && (
            <div className=" pb-12 flex flex-col items-center  ">
              {/* {!isAuth && <div className=" pb-12 flex flex-col items-center  "> */}

              <div className="text-left w-9/12 pb-4">
                <label className=" font-bold py-2" htmlFor="email ">
                  {" "}
                  Adresse email{" "}
                </label>
              </div>
              <input
                value={formValues.email}
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className=" px-4 h-12   w-9/12 bg-gray-300 border-none rounded-lg"
              />
              <p className=" mt-1 font-bold text-red-500">{formErrors.email}</p>
            </div>
          )}

          {!props.isAuth && (
            <div className=" pb-10 flex flex-col items-center  ">
              {/* {!isAuth &&  <div className=" pb-10 flex flex-col items-center  "> */}
              <div className="text-left w-9/12 pb-4">
                <label className=" font-bold py-2" htmlFor="password">
                  Mot de passe
                </label>
              </div>
              <input
                value={formValues.password}
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                className=" px-4 h-12    w-9/12 bg-gray-300 border-none rounded-lg"
              />
              <p className="  px-4  mt-1 font-bold text-red-500">
                {formErrors.password}
              </p>
            </div>
          )}
          {!props.isAuth && (
            <div className="w-full">
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className=" hover:bg-blue-700 bg-blue-600 px-10 text-white font-bold text-lg py-2 w-auto border-none rounded-full "
                >
                  {!loading ? (
                    <span>connecter </span>
                  ) : (
                    <div class="loadingio-spinner-spin-guwuy00vjh">
                      <div class="ldio-kp6g3e7ejdo">
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  )}{" "}
                </button>
              </div>
              <div className=" flex flex-col items-center">
                {/* <h1 className="hover:cursor-pointer hover:text-gray-600  font-bold text-blue-600  pt-2"> Mot de passe oublie ?</h1> */}
                <Link to={"/ForgotPassword"}>
                  <h1 className="hover:cursor-pointer hover:text-gray-600  font-bold text-blue-600  pt-2">
                    {" "}
                    Mot de passe oublie ?
                  </h1>
                </Link>
              </div>
            </div>
          )}
          {props.isAuth && (
            <div className=" grid gap-16 h-2/5 mt-24 flex flex-col justify-center">
              <h1 className=" hover:text-green-800 text-xl  font-bold text-green-600  pt-2">
                Vous etes connectes{" "}
              </h1>
              <Link to={"/Home"}>
                <button className="mt-8 hover:bg-blue-700 bg-blue-600 px-10 text-white font-bold text-lg py-2 w-auto border-none rounded-full">
                  Aller a l'Acceuil
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
