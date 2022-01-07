/* Afficher la liste des maîtres du jeu. */

module.exports = { 
    
    listmj: () => {

        
        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var variables = require('./variables.js');
        var ind = require('../index.js');


        //Message lorsqu'il n'y a aucun maître du jeu dans la liste.
        if (variables.autorisation.length === 0){
            ind.Client.channels.cache.get(variables.msgChanId).send("Il n'y a actuellement aucun MJ enregistré.");
            return;
        };

        //Boucle identifiant chaque utilisateur ou rôle faisant partie de la liste des maîtres du jeu.
        for (let mj = variables.autorisation.length-1; mj >= 0; mj--){

            //Message lorsque c'est un id d'utilisateur.
            if (variables.role[mj]==="user"){
            ind.Client.channels.cache.get(variables.msgChanId).send(`${mj+1}) <@` +variables.autorisation[mj]+">");
            }

            //Message lorsque c'est un id de rôle.
            else {
            ind.Client.channels.cache.get(variables.msgChanId).send(`${mj+1}) <@&` +variables.autorisation[mj]+">");   
            };

        };

    }
};
