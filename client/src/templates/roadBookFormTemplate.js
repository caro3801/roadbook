/**
 * Created with IntelliJ IDEA.
 * User: Tigrou
 * Date: 18/11/2013
 * Time: 22:54
 * To change this template use File | Settings | File Templates.
 */
module.exports="" +
    "<a href='/#/home'>home</a><button id='cancelRoadBook'>Cancel</button>" +
    "<form enctype='multipart/form-data' method='post' id='saveRoadBook'>"+
    "<label for='title'>Titre</label><input name='title' id='title' value='{{=it.title}}'/>" +
    "<label for='country'>Pays</label><input name='country' id='country' value='{{=it.country}}'/>" +
    "<label for='summary'>Résumé</label><input name='summary' id='summary' value='{{=it.summary}}'/>" +
    "<label for='distance'>Distance</label><input name='distance' id='distance' value='{{=it.distance}}'/>" +
    "<label for='difficulty'>Difficulté</label><input name='difficulty' id='difficulty' value='{{=it.difficulty}}'/>" +
    "<label for='price'>Prix</label><input name='price' id='price' value='{{=it.price}}'/>" +
    "<button type='submit'>Enregistrer</button>"+
    "</form>";