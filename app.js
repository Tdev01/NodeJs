//On déclare une constante qui contiendra l'export du module express
const express = require('express');
const fs = require('fs');
const app = express();
//On déclare une constante qui contiendra l'export du module body-parser
// Je vais dire à express d'utiliserbodyParser pour lire le contenu du body en json

//C'est une route par défaut qui renvoie une chaîne de caractères
// definiton de la route recupérer avec la methode get 
// test la route 
// ex: http://localhost:3000 
//C'est une route par défaut qui renvoie une chaîne de caractères
app.get("/", (request , response)=>{
    response.send("ceci est un test")
})
//C'est une route qui va permettre d'afficher les données contenu dans le fichier data.json en JSON dans la requete
// ex : http://localhost:3000/vahalla
app.get("/vahalla", (request , response) => {
    // utiliser la methode readFile du module fs pour lire le fichier  
    fs.readFile('data.json', (err, data) => {
        // condition du erreur de parcour (callBack)
        if(err){
        //renvoi de l'erreur statu 500 (signifie erreur de lecture ) et du message
        response.status(500).json({
            message: "ceci est une erreur de lecture",
            error:err
        })
        // si non status 200 renvoi en format json  
        }else{
        response.status(200).json(JSON.parse(data))
        }
    }) 
})

// On demande à Express d'exposer tout son contenue enregistré sur le port 3000 du serveur qui accueil l'application

// appel du serveur sur le port 3000
app.listen(3000,()=>{
    console.log("l'application tourne sur le port 3000")
})

// On lancera une chaine de caractères en terminal pour avoir un retour pour être sur que tout fonctionne







