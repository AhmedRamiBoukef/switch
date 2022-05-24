const Addtest = () => {
    function Add()
    {
        // ajouter les cordeonnes de switch et ellle return les ports de ce switch 
       // console.log("hello ") ;
        fetch('http://localhost:5000/api/modifier',{
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                "Bloc": "Bibliothèque",
                "Armoire": "Arm5",
                "Nom": "data5",
                "Marque": "Cisco",
                "Modèle": "IE3400",
                "Adresse_IP": "10.0.1.0",
                "N_d_inventaire": "ESI123456789",
                "N_Serie": "JHS145SFDF5",
                "Adresse_MAC": "91:F0:41:C7:AF",
                "Nombre_de_ports_F_E": 4,
                "Nombre_de_ports_G_E": 4,
                "Nombre_de_ports_SFP": 2,
                "Etat": true}) //'62555a53eb287372cf3ffdaa'
            
          }).then(res => res.json())
          .then(data => console.log(data)) ;




        // ajouter les portes modifier et retourner true c les port sont recus
        // fetch('http://localhost:5000/api/modifierPort',{
        //     method: 'PUT',
        //     headers: {'content-type':'application/json'},
        //     body: JSON.stringify(
        //         [
        //         {
        //             "nm_port":1,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.1",
        //             "type":"wifi",
        //             "cscade":false,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "Active",
        //             "Entree":true,
        //             "Cable":"F_E",
        //             "prise":"Bibliothèque"
        //             },
        //             {
        //             "nm_port":2,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"0.0.0.0",
        //             "type":"nonUtiliser",
        //             "cscade":false,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "NonActive",
        //             "Entree":true,
        //             "Cable":"F_E",
        //             "prise":""
        //             },
        //             {
        //             "nm_port":3,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"0.0.0.0",
        //             "type":"cruptu",
        //             "cscade":false,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "Active",
        //             "Entree":true,
        //             "Cable":"F_E",
        //             "prise":"Bibliothèque"
        //             },
                    
        //             {
        //             "nm_port":4,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.2",
        //             "type":"utilise",
        //             "cscade":true,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "Active",
        //             "Entree":false,
        //             "Cable":"F_E",
        //             "prise":"Bibliothèque-Bureau"
        //             },
        //             {
        //             "nm_port":5,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.2",
        //             "type":"utilise",
        //             "cscade":true,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "Active",
        //             "Entree":false,
        //             "Cable":"F_E",
        //             "prise":"Bibliothèque"
        //             },
        //             {
        //             "nm_port":6,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.1",
        //             "type":"utilise",
        //             "cscade":true,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "Active",
        //             "Entree":true,
        //             "Cable":"G_E",
        //             "prise":"Bibliothèque-etage1"
        //             },
        //             {
        //             "nm_port":7,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"0.0.0.0",
        //             "type":"nonutilise",
        //             "cscade":false,
        //             "Cascades_vers_depuis":"",
        //             "EtatDePort": "NonActive",
        //             "Entree":true,
        //             "Cable":"F_E",
        //             "prise":""
        //             },
        //             {
        //             "nm_port":8,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.2",
        //             "type":"utilise",
        //             "cscade":false,
        //             "Cascades_vers_depuis":"M3",
        //             "EtatDePort": "Active",
        //             "Entree":true,
        //             "Cable":"F_E",
        //             "prise":"M3"
        //             },
        //             {
        //             "nm_port":9,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.2",
        //             "type":"utiliser",
        //             "cscade":true,
        //             "Cascades_vers_depuis":"AP",
        //             "EtatDePort": "Active",
        //             "Entree":true,
        //             "Cable":"SFP",
        //             "prise":""
        //             },
        //             {
        //             "nm_port":10,
        //             "nom_switch":"Bibliothèque",
        //             "ip_vlan":"10.0.1.2",
        //             "type":"utiliser",
        //             "cscade":true,
        //             "Cascades_vers_depuis":"DE",
        //             "EtatDePort": "Active",
        //             "Entree":false,
        //             "Cable":"SFP",
        //             "prise":""
        //             }
        //     ]) //'62555a53eb287372cf3ffdaa'
            
        //   }).then(res => res.json())
        //   .then(data => console.log(data))
    }
    return ( 
        <div>
            <button onClick={()=>Add()} className="bg-gray-500"> cliquer pour ajouter</button>
        </div>
     );
}
 
export default Addtest;