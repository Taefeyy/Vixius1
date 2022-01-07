/* Supprimer des maitres du jeu de la liste. */

module.exports = {

    delmj : () => {
        
        
        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var variables = require('./variables.js');
        var ind = require('../index.js');


        //Récupération de l'id qui a été mentionné pour la suppression .
        var mention = ind.message.mentions.users.first();
        var mentionned = ind.message.mentions.roles.first();


        //Gestion de la suppression d'un id de la liste des maîtres du jeu.
        if (ind.message.guild.ownerId === ind.message.author.id || "250235506288361472" === ind.message.author.id){


                //Suppresion dans le cas d'un rôle.
                if (mentionned){
                    let pos = variables.autorisation.indexOf(mentionned.id);

                        //Message d'erreur si le rôle ne fait pas partie de la liste des maîtres du jeu.
                        if (pos===-1){
                            ind.Client.channels.cache.get(variables.msgChanId).send("Ce rôle ne fait pas partie de la liste des maîtres du jeu.");
                            return;
                        };

                    variables.autorisation.splice(pos, 1);
                    variables.role.splice(pos, 1);
                    ind.Client.channels.cache.get(variables.msgChanId).send("Le rôle a bien été retiré de la liste des maîtres du jeu.");
                };


                //Suppresion dans le cas d'un utilisateur.
                if (mention){
                    let pos2 = variables.autorisation.indexOf(mention.id);

                        //Message d'erreur si l'utilisateur ne fait pas partie de la liste des maîtres du jeu.
                        if (pos2===-1){
                            ind.Client.channels.cache.get(variables.msgChanId).send("Cet utilisateur ne fait pas partie de la liste des maîtres du jeu.");
                            return;
                        };

                    variables.autorisation.splice(pos2, 1);
                    variables.role.splice(pos2, 1);
                    ind.Client.channels.cache.get(variables.msgChanId).send("L'utilisateur a bien été retiré de la liste des maîtres du jeu.");
                };
        }
        
        //Message d'erreur dans le cadre où la commande est utilisée par une personne non autorisée.
        else {
            ind.Client.channels.cache.get(variables.msgChanId).send("Seul le propriétaire du serveur discord peut utiliser cette commande.");
        };

    }
};