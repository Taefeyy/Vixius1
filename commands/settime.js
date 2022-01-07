/* Définition du temps de réponse à une question */

module.exports = {

    settime : () => {

        
        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var verification = require('./verification.js');
        var variables = require('./variables.js');
        var ind = require('../index.js'); 


            //Attribution de la valeur du temps de réponse.
            if (verification.verif()===1){
            variables.t = Number(ind.message.content.substring(8))*1000; 
            ind.Client.channels.cache.get(variables.msgChanId).send("Vous avez réglé le temps de réponse sur : "+variables.t/1000+"secondes.");                                               //t est la variable de temps associée
            }

            //Message d'erreur dans le cadre où la commande est utilisée par une personne non autorisée.
            else{
            ind.message.reply("Vous ne possédez pas les autorisations nécessaires.");
            };       
    }
};