//Version type
var version = "V2 1.0.3";
//Other vars
var edition;
//Sets label for each axis
function setLabel(val, ary) {
    if (val > 100) {
        return "";
    }
    else if (val > 95) {
        return ary[0];
    }
    else if (val > 85) {
        return ary[1];
    }
    else if (val > 75) {
        return ary[2];
    }
    else if (val > 65) {
        return ary[3];
    }
    else if (val > 55) {
        return ary[4];
    }
    else if (val >= 45) {
        return ary[5];
    }
    else if (val >= 35) {
        return ary[6];
    }
    else if (val >= 25) {
        return ary[7];
    }
    else if (val >= 15) {
        return ary[8];
    }
    else if (val >= 5) {
        return ary[9];
    }
    else if (val >= 0) {
        return ary[10];
    }
    else {
        return "";
    }
}
//Setting value svg sources
//Seriousposting axis
var img_sincerity = new Image();
img_sincerity.src = "assets/values/sincerity.svg";
var img_irony = new Image();
img_irony.src = "assets/values/irony.svg";
//Allegiance axis
var img_jannyphobe = new Image();
img_jannyphobe.src = "assets/values/jannyphobe.svg";
var img_jannyphile = new Image();
img_jannyphile.src = "assets/values/jannyphile.svg";
//Experience axis
var img_veteran = new Image();
img_veteran.src = "assets/values/veteran.svg";
var img_newbie = new Image();
img_newbie.src = "assets/values/newbie.svg";
//Personality axis
var img_wholesome = new Image();
img_wholesome.src = "assets/values/wholesome.svg";
var img_edgy = new Image();
img_edgy.src = "assets/values/edgy.svg";
//Hornyposting axis
var img_horny = new Image();
img_horny.src = "assets/values/horny.svg";
var img_antihorny = new Image();
img_antihorny.src = "assets/values/antihorny.svg";
//Fame axis
var img_active = new Image();
img_active.src = "assets/values/active.svg";
var img_lurker = new Image();
img_lurker.src = "assets/values/lurker.svg";
//Shower axis
var img_standard = new Image();
img_standard.src = "assets/values/standard.svg";
var img_wacky = new Image();
img_wacky.src = "assets/values/wacky.svg";
//Sanity axis
var img_boring = new Image();
img_boring.src = "assets/values/boring.svg";
var img_schizo = new Image();
img_schizo.src = "assets/values/schizo.svg";
//Relationship axis
var img_liked = new Image();
img_liked.src = "assets/values/liked.svg";
var img_disliked = new Image();
img_disliked.src = "assets/values/disliked.svg";
//Fedposting axis
var img_discriminatory = new Image();
img_discriminatory.src = "assets/values/discriminatory.svg";
var img_inclusive = new Image();
img_inclusive.src = "assets/values/inclusive.svg";
//Action axis
var img_behaving = new Image();
img_behaving.src = "assets/values/behaving.svg";
var img_misbehaving = new Image();
img_misbehaving.src = "assets/values/misbehaving.svg";
//Purpose axis
var img_artist = new Image();
img_artist.src = "assets/values/artist.svg";
var img_community = new Image();
img_community.src = "assets/values/community.svg";
//Perception axis
var img_pleasant = new Image();
img_pleasant.src = "assets/values/pleasant.svg";
var img_annoying = new Image();
img_annoying.src = "assets/values/annoying.svg";
//Comedy axis
var img_funny = new Image();
img_funny.src = "assets/values/funny.svg";
var img_unfunny = new Image();
img_unfunny.src = "assets/values/unfunny.svg";
//Creates canvas
var makeUserCanvas = function (spos_input, alle_input, expr_input, pers_input, horn_input, fame_input, shwr_input, sani_input, rela_input, fedp_input, actn_input, purp_input, perc_input, cmdy_input, gallery, short, dark, user) {
    //Parsing input values into numbers
    var spos = parseFloat(spos_input);
    var alle = parseFloat(alle_input);
    var expr = parseFloat(expr_input);
    var pers = parseFloat(pers_input);
    var horn = parseFloat(horn_input);
    var fame = parseFloat(fame_input);
    var shwr = parseFloat(shwr_input);
    var sani = parseFloat(sani_input);
    var rela = parseFloat(rela_input);
    var fedp = parseFloat(fedp_input);
    var actn = parseFloat(actn_input);
    var purp = parseFloat(purp_input);
    var perc = parseFloat(perc_input);
    var cmdy = parseFloat(cmdy_input);
    //toFixed(1) of all values (converts to string with 1 decimal)
    var sincerity = spos.toFixed(1);
    var jannyphobe = alle.toFixed(1);
    var veteran = expr.toFixed(1);
    var wholesome = pers.toFixed(1);
    var horny = horn.toFixed(1);
    var active = fame.toFixed(1);
    var standard = shwr.toFixed(1);
    var boring = sani.toFixed(1);
    var liked = rela.toFixed(1);
    var discriminatory = fedp.toFixed(1);
    var behaving = actn.toFixed(1);
    var artist = purp.toFixed(1);
    var pleasant = perc.toFixed(1);
    var funny = cmdy.toFixed(1);
    var irony = (100 - spos).toFixed(1);
    var jannyphile = (100 - alle).toFixed(1);
    var newbie = (100 - expr).toFixed(1);
    var edgy = (100 - pers).toFixed(1);
    var antihorny = (100 - horn).toFixed(1);
    var lurker = (100 - fame).toFixed(1);
    var wacky = (100 - shwr).toFixed(1);
    var schizo = (100 - sani).toFixed(1);
    var disliked = (100 - rela).toFixed(1);
    var inclusive = (100 - fedp).toFixed(1);
    var misbehaving = (100 - actn).toFixed(1);
    var community = (100 - purp).toFixed(1);
    var annoying = (100 - perc).toFixed(1);
    var unfunny = (100 - cmdy).toFixed(1);
    //Canvas drawing
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    c.width = 800;
    c.height = 1860;
    if (dark == true) {
        ctx.fillStyle = "#333";
    }
    else {
        ctx.fillStyle = "#EEE";
    }
    //Drawing value images
    ctx.fillRect(0, 0, 800, 1860);
    ctx.drawImage(img_sincerity, 20, 170, 100, 100);
    ctx.drawImage(img_irony, 680, 170, 100, 100);
    ctx.drawImage(img_jannyphobe, 20, 290, 100, 100);
    ctx.drawImage(img_jannyphile, 680, 290, 100, 100);
    ctx.drawImage(img_veteran, 20, 410, 100, 100);
    ctx.drawImage(img_newbie, 680, 410, 100, 100);
    ctx.drawImage(img_wholesome, 20, 530, 100, 100);
    ctx.drawImage(img_edgy, 680, 530, 100, 100);
    ctx.drawImage(img_horny, 20, 650, 100, 100);
    ctx.drawImage(img_antihorny, 680, 650, 100, 100);
    ctx.drawImage(img_active, 20, 770, 100, 100);
    ctx.drawImage(img_lurker, 680, 770, 100, 100);
    ctx.drawImage(img_standard, 20, 890, 100, 100);
    ctx.drawImage(img_wacky, 680, 890, 100, 100);
    ctx.drawImage(img_boring, 20, 1010, 100, 100);
    ctx.drawImage(img_schizo, 680, 1010, 100, 100);
    ctx.drawImage(img_liked, 20, 1130, 100, 100);
    ctx.drawImage(img_disliked, 680, 1130, 100, 100);
    ctx.drawImage(img_discriminatory, 20, 1250, 100, 100);
    ctx.drawImage(img_inclusive, 680, 1250, 100, 100);
    ctx.drawImage(img_behaving, 20, 1370, 100, 100);
    ctx.drawImage(img_misbehaving, 680, 1370, 100, 100);
    ctx.drawImage(img_artist, 20, 1490, 100, 100);
    ctx.drawImage(img_community, 680, 1490, 100, 100);
    ctx.drawImage(img_pleasant, 20, 1610, 100, 100);
    ctx.drawImage(img_annoying, 680, 1610, 100, 100);
    ctx.drawImage(img_funny, 20, 1730, 100, 100);
    ctx.drawImage(img_unfunny, 680, 1730, 100, 100);
    //Drawing bar background
    ctx.fillStyle = "#222222";
    for (var i = 0, len = 15; i < len; i++) {
        ctx.lineJoin = "round";
        ctx.lineWidth = 75;
        ctx.strokeRect(165, 220 + 120 * i, 470, 0);
    }
    //Drawing bars
    ctx.lineJoin = "round";
    ctx.lineWidth = 65;
    //Seriousposting axis
    if (spos >= 50) {
        ctx.strokeStyle = "#00F";
        ctx.strokeRect(636 - 4.72 * (100 - spos), 220, 4.72 * (100 - spos) - 2, 0);
        ctx.strokeStyle = "#B22222";
        ctx.strokeRect(166, 220, 4.72 * spos - 2, 0);
    }
    else {
        ctx.strokeStyle = "#B22222";
        ctx.strokeRect(166, 220, 4.72 * spos - 2, 0);
        ctx.strokeStyle = "#00F";
        ctx.strokeRect(636 - 4.72 * (100 - spos), 220, 4.72 * (100 - spos) - 2, 0);
    }
    //Allegiance axis
    if (alle >= 50) {
        ctx.strokeStyle = "#333";
        ctx.strokeRect(636 - 4.72 * (100 - alle), 340, 4.72 * (100 - alle) - 2, 0);
        ctx.strokeStyle = "#EDB509";
        ctx.strokeRect(166, 340, 4.72 * alle - 2, 0);
    }
    else {
        ctx.strokeStyle = "#EDB509";
        ctx.strokeRect(166, 340, 4.72 * alle - 2, 0);
        ctx.strokeStyle = "#333";
        ctx.strokeRect(636 - 4.72 * (100 - alle), 340, 4.72 * (100 - alle) - 2, 0);
    }
    //Experience axis
    if (expr >= 50) {
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(636 - 4.72 * (100 - expr), 460, 4.72 * (100 - expr) - 2, 0);
        ctx.strokeStyle = "#00F";
        ctx.strokeRect(166, 460, 4.72 * expr - 2, 0);
    }
    else {
        ctx.strokeStyle = "#00F";
        ctx.strokeRect(166, 460, 4.72 * expr - 2, 0);
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(636 - 4.72 * (100 - expr), 460, 4.72 * (100 - expr) - 2, 0);
    }
    //Personality axis
    if (pers >= 50) {
        ctx.strokeStyle = "#EE2436";
        ctx.strokeRect(636 - 4.72 * (100 - pers), 580, 4.72 * (100 - pers) - 2, 0);
        ctx.strokeStyle = "#C000FF";
        ctx.strokeRect(166, 580, 4.72 * pers - 2, 0);
    }
    else {
        ctx.strokeStyle = "#C000FF";
        ctx.strokeRect(166, 580, 4.72 * pers - 2, 0);
        ctx.strokeStyle = "#EE2436";
        ctx.strokeRect(636 - 4.72 * (100 - pers), 580, 4.72 * (100 - pers) - 2, 0);
    }
    //Hornyposting axis
    if (horn >= 50) {
        ctx.strokeStyle = "#FEC62B";
        ctx.strokeRect(636 - 4.72 * (100 - horn), 700, 4.72 * (100 - horn) - 2, 0);
        ctx.strokeStyle = "#880015";
        ctx.strokeRect(166, 700, 4.72 * horn - 2, 0);
    }
    else {
        ctx.strokeStyle = "#880015";
        ctx.strokeRect(166, 700, 4.72 * horn - 2, 0);
        ctx.strokeStyle = "#FEC62B";
        ctx.strokeRect(636 - 4.72 * (100 - horn), 700, 4.72 * (100 - horn) - 2, 0);
    }
    //Fame axis
    if (fame >= 50) {
        ctx.strokeStyle = "#FFFFFF";
        ctx.strokeRect(636 - 4.72 * (100 - fame), 820, 4.72 * (100 - fame) - 2, 0);
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(166, 820, 4.72 * fame - 2, 0);
    }
    else {
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(166, 820, 4.72 * fame - 2, 0);
        ctx.strokeStyle = "#FFFFFF";
        ctx.strokeRect(636 - 4.72 * (100 - fame), 820, 4.72 * (100 - fame) - 2, 0);
    }
    //Shower axis
    if (shwr >= 50) {
        ctx.strokeStyle = "#89001C";
        ctx.strokeRect(636 - 4.72 * (100 - shwr), 940, 4.72 * (100 - shwr) - 2, 0);
        ctx.strokeStyle = "#8B5320";
        ctx.strokeRect(166, 940, 4.72 * shwr - 2, 0);
    }
    else {
        ctx.strokeStyle = "#8B5320";
        ctx.strokeRect(166, 940, 4.72 * shwr - 2, 0);
        ctx.strokeStyle = "#89001C";
        ctx.strokeRect(636 - 4.72 * (100 - shwr), 940, 4.72 * (100 - shwr) - 2, 0);
    }
    //Sanity axis
    if (sani >= 50) {
        ctx.strokeStyle = "#7F3980";
        ctx.strokeRect(636 - 4.72 * (100 - sani), 1060, 4.72 * (100 - sani) - 2, 0);
        ctx.strokeStyle = "#F5DD00";
        ctx.strokeRect(166, 1060, 4.72 * sani - 2, 0);
    }
    else {
        ctx.strokeStyle = "#F5DD00";
        ctx.strokeRect(166, 1060, 4.72 * sani - 2, 0);
        ctx.strokeStyle = "#7F3980";
        ctx.strokeRect(636 - 4.72 * (100 - sani), 1060, 4.72 * (100 - sani) - 2, 0);
    }
    //Relationship axis
    if (rela >= 50) {
        ctx.strokeStyle = "#F5A9B8";
        ctx.strokeRect(636 - 4.72 * (100 - rela), 1180, 4.72 * (100 - rela) - 2, 0);
        ctx.strokeStyle = "#52CE3C";
        ctx.strokeRect(166, 1180, 4.72 * rela - 2, 0);
    }
    else {
        ctx.strokeStyle = "#52CE3C";
        ctx.strokeRect(166, 1180, 4.72 * rela - 2, 0);
        ctx.strokeStyle = "#F5A9B8";
        ctx.strokeRect(636 - 4.72 * (100 - rela), 1180, 4.72 * (100 - rela) - 2, 0);
    }
    //Fedposting axis
    if (fedp >= 50) {
        ctx.strokeStyle = "#EB0DEA";
        ctx.strokeRect(636 - 4.72 * (100 - fedp), 1300, 4.72 * (100 - fedp) - 2, 0);
        ctx.strokeStyle = "#32B5D4";
        ctx.strokeRect(166, 1300, 4.72 * fedp - 2, 0);
    }
    else {
        ctx.strokeStyle = "#32B5D4";
        ctx.strokeRect(166, 1300, 4.72 * fedp - 2, 0);
        ctx.strokeStyle = "#EB0DEA";
        ctx.strokeRect(636 - 4.72 * (100 - fedp), 1300, 4.72 * (100 - fedp) - 2, 0);
    }
    //Actions axis
    if (actn >= 50) {
        ctx.strokeStyle = "#429B7D";
        ctx.strokeRect(636 - 4.72 * (100 - actn), 1420, 4.72 * (100 - actn) - 2, 0);
        ctx.strokeStyle = "#7F00FF";
        ctx.strokeRect(166, 1420, 4.72 * actn - 2, 0);
    }
    else {
        ctx.strokeStyle = "#7F00FF";
        ctx.strokeRect(166, 1420, 4.72 * actn - 2, 0);
        ctx.strokeStyle = "#429B7D";
        ctx.strokeRect(636 - 4.72 * (100 - actn), 1420, 4.72 * (100 - actn) - 2, 0);
    }
    //Purpose axis
    if (purp >= 50) {
        ctx.strokeStyle = "#01411C";
        ctx.strokeRect(636 - 4.72 * (100 - purp), 1540, 4.72 * (100 - purp) - 2, 0);
        ctx.strokeStyle = "#003AAD";
        ctx.strokeRect(166, 1540, 4.72 * purp - 2, 0);
    }
    else {
        ctx.strokeStyle = "#003AAD";
        ctx.strokeRect(166, 1540, 4.72 * purp - 2, 0);
        ctx.strokeStyle = "#01411C";
        ctx.strokeRect(636 - 4.72 * (100 - purp), 1540, 4.72 * (100 - purp) - 2, 0);
    }
    //Perception axis
    if (perc >= 50) {
        ctx.strokeStyle = "#1A193A";
        ctx.strokeRect(636 - 4.72 * (100 - perc), 1660, 4.72 * (100 - perc) - 2, 0);
        ctx.strokeStyle = "#E88401";
        ctx.strokeRect(166, 1660, 4.72 * perc - 2, 0);
    }
    else {
        ctx.strokeStyle = "#E88401";
        ctx.strokeRect(166, 1660, 4.72 * perc - 2, 0);
        ctx.strokeStyle = "#1A193A";
        ctx.strokeRect(636 - 4.72 * (100 - perc), 1660, 4.72 * (100 - perc) - 2, 0);
    }
    //Comedy axis
    if (cmdy >= 50) {
        ctx.strokeStyle = "#7F66DE";
        ctx.strokeRect(636 - 4.72 * (100 - cmdy), 1780, 4.72 * (100 - cmdy) - 2, 0);
        ctx.strokeStyle = "#05D243";
        ctx.strokeRect(166, 1780, 4.72 * cmdy - 2, 0);
    }
    else {
        ctx.strokeStyle = "#05D243";
        ctx.strokeRect(166, 1780, 4.72 * cmdy - 2, 0);
        ctx.strokeStyle = "#7F66DE";
        ctx.strokeRect(636 - 4.72 * (100 - cmdy), 1780, 4.72 * (100 - cmdy) - 2, 0);
    }
    //Top info
    if (dark == true) {
        ctx.fillStyle = "#DDDDDD";
    }
    else {
        ctx.fillStyle = "#222222";
    }
    ctx.font = "700 50px Source Sans Pro";
    ctx.textAlign = "left";
    ctx.fillText("PolcompballValues", 20, 90);
    ctx.font = "30px Source Sans Pro";
    //Gallery set
    if (gallery == false) {
        user = "Closest Match: " + user;
    }
    ctx.fillText(user, 20, 130);
    //Left column percentages
    ctx.font = "50px Source Sans Pro";
    ctx.textAlign = "left";
    ctx.fillStyle = "#000";
    if (spos > 30) {
        ctx.fillText(sincerity + "%", 150, 237.5);
    }
    if (alle > 30) {
        ctx.fillText(jannyphobe + "%", 150, 357.5);
    }
    if (expr > 30) {
        ctx.fillText(veteran + "%", 150, 477.5);
    }
    if (pers > 30) {
        ctx.fillText(wholesome + "%", 150, 597.5);
    }
    if (fame > 30) {
        ctx.fillText(active + "%", 150, 837.5);
    }
    if (shwr > 30) {
        ctx.fillText(standard + "%", 150, 957.5);
    }
    if (sani > 30) {
        ctx.fillText(boring + "%", 150, 1077.5);
    }
    if (rela > 30) {
        ctx.fillText(liked + "%", 150, 1197.5);
    }
    if (fedp > 30) {
        ctx.fillText(discriminatory + "%", 150, 1317.5);
    }
    if (actn > 30) {
        ctx.fillText(behaving + "%", 150, 1437.5);
    }
    if (purp > 30) {
        ctx.fillText(artist + "%", 150, 1557.5);
    }
    if (perc > 30) {
        ctx.fillText(pleasant + "%", 150, 1677.5);
    }
    if (cmdy > 30) {
        ctx.fillText(funny + "%", 150, 1797.5);
    }
    //White text
    ctx.fillStyle = "#DDD";
    if (horn > 30) {
        ctx.fillText(horny + "%", 150, 717.5);
    }
    //Right column percentages
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    if (spos < 70) {
        ctx.fillText(irony + "%", 650, 237.5);
    }
    if (expr < 70) {
        ctx.fillText(newbie + "%", 650, 477.5);
    }
    if (pers < 70) {
        ctx.fillText(edgy + "%", 650, 597.5);
    }
    if (horn < 70) {
        ctx.fillText(antihorny + "%", 650, 717.5);
    }
    if (fame < 70) {
        ctx.fillText(lurker + "%", 650, 837.5);
    }
    if (sani < 70) {
        ctx.fillText(schizo + "%", 650, 1077.5);
    }
    if (rela < 70) {
        ctx.fillText(disliked + "%", 650, 1197.5);
    }
    if (fedp < 70) {
        ctx.fillText(inclusive + "%", 650, 1317.5);
    }
    if (actn < 70) {
        ctx.fillText(misbehaving + "%", 650, 1437.5);
    }
    if (cmdy < 70) {
        ctx.fillText(unfunny + "%", 650, 1797.5);
    }
    //White text 
    ctx.fillStyle = "#DDD";
    if (alle < 70) {
        ctx.fillText(jannyphile + "%", 650, 357.5);
    }
    if (shwr < 70) {
        ctx.fillText(wacky + "%", 650, 957.5);
    }
    if (purp < 70) {
        ctx.fillText(community + "%", 650, 1557.5);
    }
    if (perc < 70) {
        ctx.fillText(annoying + "%", 650, 1677.5);
    }
    //Adds more text on the top
    if (dark == true) {
        ctx.fillStyle = "#DDDDDD";
    }
    else {
        ctx.fillStyle = "#222222";
    }
    ctx.font = "300 25px Source Sans Pro";
    ctx.fillText("polcompballvalues.github.io", 780, 40);
    ctx.fillText(version, 780, 70);
    if (gallery == true) {
        edition = "User gallery";
    }
    else {
        if (short == true) {
            edition = "Short test";
        }
        else {
            edition = "Full test";
        }
    }
    ctx.fillText(edition, 780, 100);
    //Draw array matches
    ctx.textAlign = "center";
    ctx.font = "bold 30px Source Sans Pro";
    //@ts-ignore
    ctx.fillText("Seriousposting Axis: " + setLabel(spos, spos_array), 400, 170);
    //@ts-ignore
    ctx.fillText("Allegiance Axis: " + setLabel(alle, alle_array), 400, 290);
    //@ts-ignore
    ctx.fillText("Experience Axis: " + setLabel(expr, expr_array), 400, 410);
    //@ts-ignore
    ctx.fillText("Personality Axis: " + setLabel(pers, pers_array), 400, 530);
    //@ts-ignore
    ctx.fillText("Hornyposting Axis: " + setLabel(horn, horn_array), 400, 650);
    //@ts-ignore
    ctx.fillText("Fame Axis: " + setLabel(fame, fame_array), 400, 770);
    //@ts-ignore
    ctx.fillText("Shower Axis: " + setLabel(shwr, shwr_array), 400, 890);
    //@ts-ignore
    ctx.fillText("Sanity Axis: " + setLabel(sani, sani_array), 400, 1010);
    //@ts-ignore
    ctx.fillText("Relationship Axis: " + setLabel(rela, rela_array), 400, 1130);
    //@ts-ignore
    ctx.fillText("Fedposting Axis: " + setLabel(fedp, fedp_array), 400, 1250);
    //@ts-ignore
    ctx.fillText("Actions Axis: " + setLabel(actn, actn_array), 400, 1370);
    //@ts-ignore
    ctx.fillText("Purpose Axis: " + setLabel(purp, purp_array), 400, 1490);
    //@ts-ignore
    ctx.fillText("Perception Axis: " + setLabel(perc, perc_array), 400, 1610);
    //@ts-ignore
    ctx.fillText("Comedy Axis: " + setLabel(cmdy, cmdy_array), 400, 1730);
    //@ts-ignore
    document.getElementById("banner").src = c.toDataURL();
};
