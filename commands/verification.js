/* Vérifier les autorisations pour les commandes */

module.exports = {

    verif : () => {


        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var variables = require('./variables.js');
        var ind = require('../index.js');

        //Recherche si l'id qui a utilisé la commande fait parti du tableau d'autorisation.
        var verifica = variables.autorisation.indexOf(ind.message.author.id);        

        
        // passe verif() à 1 si la vérification est validée.
        if (verifica != -1){
            return 1;
        };
    } 
};