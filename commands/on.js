/* Ouvrir l'évent question */

module.exports = {

    on : () => {


        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var verification = require('./verification.js');
        var variables = require('./variables.js');
        var ind = require('../index.js');


        //Ouverture de l'évent.
        if (verification.verif()===1){

                //Message d'erreur si l'évent est déjà ouvert.
                if (variables.on === 1){
                    ind.Client.channels.cache.get(variables.msgChanId).send("Il semblerait que ce jeux soit déjà en cours.");
                    return;  
                };

            variables.on = 1;
            ind.Client.channels.cache.get(variables.msgChanId).send("Ouverture des jeux! Puisse le sort vous être favorable...");
        }

        //Message d'erreur dans le cadre où la commande est utilisée par une personne non autorisée.
        else{
            ind.message.reply("Vous ne possédez pas les autorisations nécessaires.");
        };
    }
};