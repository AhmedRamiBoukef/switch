import React from "react";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
const Usefetch = ( url ) => {

  
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSwitches(data);
  //       setLoading(false);
  //    //  console.log(data) ;
  //     });
  // }, []);

  // return({switches, loading,setSwitches})

  const [switches, setSwitches] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    // let headersList = {
    //   "Accept": "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    //  }
     
    //  fetch("http://localhost:5000/api/switch", { 
    //    method: "GET",
    //    headers: headersList
    //  }).then(function(response) {
    //    return response.text();
    //  }).then(function(data) {
    //    console.log(data);
    //  })

    let headersList = {
      
        'Content-Type': 'application/json',
        'x-access-token': Cookies.get("jwt"),
     }
     
     fetch(url, { 
       method: "GET",
       headers: headersList
     }).then(function(response) {
       return response.json();
     }).then(function(data) {
      setSwitches(data);
      setLoading(false);
      //  console.log(data[0]);
     })
  }, []);



  return({switches, loading,setSwitches})
};

export default Usefetch;
