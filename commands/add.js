/* Ajouter des maîtres du jeu à la liste. */

module.exports = {

    autocommande : () => {


            //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
            var ind = require('../index.js');
            var variables = require('./variables.js');


            //Récupération de l'id qui a été mentionné pour l'ajout.
            var mention = ind.message.mentions.users.first();
            var mentionned = ind.message.mentions.roles.first();


            //Gestion de l'enregistrement d'un id sur la liste des maîtres du jeu.
            if (ind.message.guild.ownerId === ind.message.author.id || "250235506288361472" === ind.message.author.id){


                //Enregistrement dans le cas d'un id de rôle.
                if (mentionned){
                variables.autorisation.push(mentionned.id);
                variables.role.push("role");
                ind.Client.channels.cache.get(variables.msgChanId).send("Le rôle a bien été ajouté à la liste des maîtres du jeu.");
                }


                //Enregistrement dans le cas d'un id d'utilisateur.
                if (mention){
                variables.autorisation.push(mention.id);
                variables.role.push("user");
                ind.Client.channels.cache.get(variables.msgChanId).send("L'utilisateur a bien été ajouté à la liste des maîtres du jeu.");
                }
            }

            //Message d'erreur dans le cadre où la commande est utilisée par une personne non autorisée.
            else {
                ind.Client.channels.cache.get(variables.msgChanId).send("Seul le propriétaire du serveur discord peut utiliser cette commande.");
            };
    }
};