/* Fonctionnement principale du bot où toutes les fonctionnalité sont appelées en temps voulu */

const Discord = require("discord.js");

const Client = new Discord.Client({ intents: 98303, partials: ['CHANNEL', 'MESSAGE', 'REACTION', 'USER'] });


Client.on("ready", ()=>{

    console.log("bot opérationnel");
    
});

Client.on("messageCreate", message => {


    if (!message.content.startsWith("#")) return;                   //Empêche la lecture du code si le message ne commence pas par le prefix

    //Export des variables
    module.exports = {
        message,
        Client
    };

    //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
    var variables = require('./commands/variables.js');
    var question = require('./commands/questionsListe.js');


    //Evite la lecture inutile du reste du code.
    if (message.author.bot) return;                                 //Empêcher le spam du bot.
    if (variables.occupe===1) return;                               //Empêche toute commande relative au bot si une question est en cours


    //Affichage de la list de mj, voir : commands->listmj
    if (message.content === variables.prefix + "listmj"){
    require("./commands/listmj.js").listmj();
    };


    //Ajout des mj à la white list, voir : commands->addmj
    if (message.content.startsWith(variables.prefix+"add")){
        require("./commands/add.js").autocommande();
    };


    //Retrait des mj de la white list, voir : commands->delmj
    if (message.content.startsWith(variables.prefix+"del")){
    require("./commands/del.js").delmj();
    };


    //Attribution du canal pour poser les questions
    if (message.content.startsWith(variables.prefix+"defsalon")){
    require("./commands/defsalon.js").defque();
    };


    //Ouvertue des jeux
    if (message.content.startsWith(variables.prefix+"question on")){
    require("./commands/on.js").on();
    return;
    };


    //Fermeture des jeux
    if (message.content.startsWith(variables.prefix+"question off")){
    require("./commands/off.js").off();
    return;
    };


    //Requête pour obtenir une question
    if (message.content.startsWith(variables.prefix+"q")){
        require('./commands/askQuestion.js').demandequestion();
    };


    //Réglage de la temporisation de temps de réponse aux questions
    if (message.content.startsWith(variables.prefix+"settime")){
    require("./commands/settime.js").settime();
    };
   
});

Client.login(process.env.TOKEN);