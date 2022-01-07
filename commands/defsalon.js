/* Définir le salon dans le quel les questions seront posées. */

module.exports = {

    defque : () => {

        
        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var verification = require('./verification.js');
        var variables = require('./variables.js');
        var ind = require('../index.js');


        //Définition du salon dans le quel seront posées les questions.
        if (verification.verif()===1){
        ind.Client.channels.cache.get(variables.msgChanId).send("Le salon pour les questions a été définit en tant que : "+"<#"+variables.msgChanId+">.");
        variables.idSalonQuestion=variables.msgChanId;
        }

        //Message d'erreur si une personne non autorisée utilise la commande.
        else {
            ind.message.reply("Vous ne possédez pas les autorisations nécessaires.");
        };
    }
};