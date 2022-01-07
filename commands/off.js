/* Fermer l'évent question */

module.exports = {

    off : () => {

        
        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var verification = require('./verification.js');
        var variables = require('./variables.js');
        var ind = require('../index.js');
            

            //Fermeture de l'évent.
            if (verification.verif()===1){

                //Message d'erreur si l'évent est déjà fermé.
                if (variables.on === 0){
                ind.Client.channels.cache.get(variables.msgChanId).send("Il semblerait que ce jeux ai déjà été clôturé.");
                return;  
                };

                variables.on = 0;
                ind.Client.channels.cache.get(variables.msgChanId).send("Fermeture des jeux! Félicitations à tous vous pour votre participation.");
            }

            //Message d'erreur dans le cadre où la commande est utilisée par une personne non autorisée.
            else{
            ind.message.reply("Vous ne possédez pas les autorisations nécessaires.");
            };
    }
};