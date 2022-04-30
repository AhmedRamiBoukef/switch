let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       "_id": "626d5210b62855ae86ad8f8f",
       "prenom": "Boukef",
       "name": "sadadada",
       "email": "ka_boukef@esi.dz",
       "password": "l~HA5DgWvc",
       "role": true,
       "deleted": false,
       "occupation": "z",
       "phone": "077336773"
   });
   
   fetch("localhost:5000/login", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   }).then(function(response) {
     return response.text();
   }).then(function(data) {
     console.log(data);
   })