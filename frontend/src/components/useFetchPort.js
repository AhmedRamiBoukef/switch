import React from "react";
import { useState, useEffect } from "react";
const UseFetchPort = (url,id) => {
    const [portes, setPortes] = useState([]);
    const [loadingPorts, setLoading] = useState(true);
   
         fetch(url,{
           method: 'POST',
           headers: {'content-type':'application/json'},
           body: JSON.stringify({_id: id }) //'62555a53eb287372cf3ffdaa'
           
         })
           .then((res) => {
             return res.json();
           })
           .then((data) => {
             console.log(data.ports) ;
             setLoading(false) ;
            setPortes(data.ports) ;
           });
    
          return ( {portes,loadingPorts,setPortes} )
} ;
 
export default UseFetchPort;