type score = {a:number, b:number, c:number, d:number, e:number, f:number, g:number, h:number, i:number, j:number, k:number, l:number, m:number, n:number }
//Version type
const version: string = "V2 1.3.5";
//Arrays
//Seriousposting axis (Sincerity vs Irony)
const spos_array: Array<string> = ["Austere", "Ascetic", "Sombre", "Genuine", "Rational", "Sober", "Lighthearted", "Memey", "Playful", "Silly", "Incoherent"]
//Allegiance axis (Jannyphobe vs Jannyphile)
const alle_array: Array<string> = ["Revolutionary", "Rebellious", "Opposed", "Unrested", "Populist",  "Neutral", "Establishment", "Elitist", "Loyal", "Aristocratic", "Enslaved"]
//Experience axis (Veteran vs Newbie)
const expr_array: Array<string> = ["Primordial", "Ancient", "Historical", "Former", "Time-honored", "Reminiscent", "Apprentice", "Contemporary", "Missed Out", "Uninformed", "Novice"]
//Personality axis (Wholesome vs Edgy)
const pers_array: Array<string> = ["Angelic", "Benevolent", "Empathic", "Goodwilling", "Respectful", "Polite", "Rude", "Harsh", "Cruel", "Heartless", "Inhumane"]
//Hornyposting axis (Horny vs Anti-Horny)
const horn_array: Array<string> = ["Nymphomaniac", "Decadent", "Down Bad", "Lustful", "Libertine", "Moderated", "Composed", "Pure", "Prudish", "Restrained", "Overprotective"]
//Fame axis (Active vs Lurker)
const fame_array: Array<string> = ["Protagonist", "Celebrity", "Important", "Famed", "Recognizable", "NPC", "Integrated", "Sometimes", "Stranger", "Nobody", "Incognito"]
//Shower axis (Standard vs Wacky)
const shwr_array: Array<string> = ["Apolitical", "Uncaring", "Ordinary", "Moderate", "Opinionated", "Political", "Ideological", "Radical", "Extremist", "Convoluted", "Otherworldly"]
//Sanity axis (Boring vs Schizo)
const sani_array: Array<string> = ["Too Normal", "Bland", "Healthy", "Sound Minded", "Tame", "Interesting", "Different", "Neurotic", "Out There", "Deranged", "a̵̒̆a̶̋͗a̶͂͠a̴͂̅a̵̔̕a̴̔͒"]
//Relationship axis (Liked vs Disliked)
const rela_array: Array<string> = ["Venerated", "Loved", "Admired", "Appreciated", "Respected", "No Opinion", "Mixed Feelings", "Unwanted", "Disliked", "Hated", "Abhorred"]
//Fedposting axis (Discriminatory vs Inclusive)
const fedp_array: Array<string> = ["Glowie", "Bigoted", "Prejudicial", "Exclusive", "Biased", "Varying", "Open-minded", "Tolerant", "Accepting", "Cosmopolitan", "SJW"]
//Actions axis (Behaving vs Misbehaving)
const actn_array: Array<string> = ["Robotic", "Lawful", "Obedient", "Compliant", "Behaved", "Occasional",  "Tripping-up", "Unruly", "Disobedient", "Chaotic", "Criminal"]
//Purpose axis (Artist vs Community)
const purp_array: Array<string> = ["Maestro", "Art Hero", "Aesthetic", "Artistic Focused", "Wikiredditor", "Undecided", "Member", "Conversational", "Chatty", "Talkative", "Talentless"]
//Perception axis (Pleasant vs Annoying)
const perc_array: Array<string> = ["Therapeutic", "Comforting", "Calming", "Chill", "Tolerable", "Ambivalent", "Uncomforting", "Pestering", "Obnoxious", "Infuriating", "Proof that God is testing us"]
//Comedy axis (Funny vs Unfunny)
const cmdy_array: Array<string> = ["Hysterical", "Hilarious", "Humorous", "Comical", "Amusing", "Undifferentiated", "Superficial", "Unironic", "Lackluster", "Crickets", "Epitome of Boredom"]

//Setting value svg sources
//Seriousposting axis
var img_sincerity      = <HTMLImageElement> new Image()
img_sincerity.src      = "assets/values/sincerity.svg"
var img_irony          = <HTMLImageElement> new Image()
img_irony.src          = "assets/values/irony.svg"
//Allegiance axis
var img_jannyphobe     = <HTMLImageElement> new Image()
img_jannyphobe.src     = "assets/values/jannyphobe.svg"
var img_jannyphile     = <HTMLImageElement> new Image()
img_jannyphile.src     = "assets/values/jannyphile.svg"
//Experience axis
var img_veteran        = <HTMLImageElement> new Image()
img_veteran.src        = "assets/values/veteran.svg"
var img_newbie         = <HTMLImageElement> new Image()
img_newbie.src         = "assets/values/newbie.svg"
//Personality axis
var img_wholesome      = <HTMLImageElement> new Image()
img_wholesome.src      = "assets/values/wholesome.svg"
var img_edgy           = <HTMLImageElement> new Image()
img_edgy.src           = "assets/values/edgy.svg"
//Hornyposting axis
var img_horny          = <HTMLImageElement> new Image()
img_horny.src          = "assets/values/horny.svg"
var img_antihorny      = <HTMLImageElement> new Image()
img_antihorny.src      = "assets/values/antihorny.svg"
//Fame axis
var img_active         = <HTMLImageElement> new Image()
img_active.src         = "assets/values/active.svg"
var img_lurker         = <HTMLImageElement> new Image()
img_lurker.src         = "assets/values/lurker.svg"
//Shower axis
var img_standard       = <HTMLImageElement> new Image()
img_standard.src       = "assets/values/standard.svg"
var img_wacky          = <HTMLImageElement> new Image()
img_wacky.src          = "assets/values/wacky.svg"
//Sanity axis
var img_boring         = <HTMLImageElement> new Image()
img_boring.src         = "assets/values/boring.svg"
var img_schizo         = <HTMLImageElement> new Image()
img_schizo.src         = "assets/values/schizo.svg"
//Relationship axis
var img_liked          = <HTMLImageElement> new Image()
img_liked.src          = "assets/values/liked.svg"
var img_disliked       = <HTMLImageElement> new Image()
img_disliked.src       = "assets/values/disliked.svg"
//Fedposting axis
var img_discriminatory = <HTMLImageElement> new Image()
img_discriminatory.src = "assets/values/discriminatory.svg"
var img_inclusive      = <HTMLImageElement> new Image()
img_inclusive.src      = "assets/values/inclusive.svg"
//Action axis
var img_behaving       = <HTMLImageElement> new Image()
img_behaving.src       = "assets/values/behaving.svg"
var img_misbehaving    = <HTMLImageElement> new Image()
img_misbehaving.src    = "assets/values/misbehaving.svg"
//Purpose axis
var img_artist         = <HTMLImageElement> new Image()
img_artist.src         = "assets/values/artist.svg"
var img_community      = <HTMLImageElement> new Image()
img_community.src      = "assets/values/community.svg"
//Perception axis
var img_pleasant       = <HTMLImageElement> new Image()
img_pleasant.src       = "assets/values/pleasant.svg"
var img_annoying       = <HTMLImageElement> new Image()
img_annoying.src       = "assets/values/annoying.svg"
//Comedy axis
var img_funny          = <HTMLImageElement> new Image()
img_funny.src          = "assets/values/funny.svg"
var img_unfunny        = <HTMLImageElement> new Image()
img_unfunny.src        = "assets/values/unfunny.svg"

//Sets label for each axis
function setLabel(val:number, ary:Array<string>) {
    if(val > 100) {return ""} else
    if(val >  95) {return ary[0]} else
    if(val >  85) {return ary[1]} else
    if(val >  75) {return ary[2]} else
    if(val >  65) {return ary[3]} else
    if(val >  55) {return ary[4]} else
    if(val >= 45) {return ary[5]} else
    if(val >= 35) {return ary[6]} else
    if(val >= 25) {return ary[7]} else
    if(val >= 15) {return ary[8]} else
    if(val >=  5) {return ary[9]} else
    if(val >=  0) {return ary[10]} else
    {return ""}
}

//Draws each axis
function axisDraw(ctx, val:number, height:number, l_color:string, r_color:string){
    if(val >= 50){
        ctx.strokeStyle = r_color
        ctx.strokeRect(636 - 4.72 * (100 - val), height, 4.72 * (100 - val) - 2, 0)
        ctx.strokeStyle = l_color
        ctx.strokeRect(166, height, 4.72 * val - 2, 0)
    } else {
        ctx.strokeStyle = l_color
        ctx.strokeRect(166, height, 4.72 * val - 2, 0)
        ctx.strokeStyle = r_color
        ctx.strokeRect(636 - 4.72 * (100 - val), height, 4.72 * (100 - val) - 2, 0)
    }
}

function drawText(ctx, val:number, height:number, lwhite: boolean, rwhite: boolean){
    if (val > 30) {
        if (lwhite){
            ctx.fillStyle = "#FFF"
        } else {
            ctx.fillStyle = "#000"
        }
        ctx.textAlign = "left"
        ctx.fillText(val.toFixed(1) + "%", 150, height)
    }
    if (val < 70) {
        if (rwhite){
            ctx.fillStyle = "#FFF"
        } else {
            ctx.fillStyle = "#000"
        }
        ctx.textAlign = "right"
        ctx.fillText((100 - val).toFixed(1) + "%", 650, height)
    }
}



//Creates canvas
function makeUserCanvas(score: score, gallery: boolean, short: boolean, dark: boolean, user: string){
    //Canvas drawing
    let c = document.createElement("canvas")
    let ctx = c.getContext("2d")
    c.width = 800;
    c.height = 1860;
    if(dark){
        ctx.fillStyle = "#333"
    } else {
        ctx.fillStyle = "#EEE"
    }
    //Drawing value images
    ctx.fillRect(0, 0, 800, 1860);
    ctx.drawImage(img_sincerity, 20, 170, 100, 100)
    ctx.drawImage(img_irony, 680, 170, 100, 100)
    ctx.drawImage(img_jannyphobe, 20, 290, 100, 100)
    ctx.drawImage(img_jannyphile, 680, 290, 100, 100)
    ctx.drawImage(img_veteran, 20, 410, 100, 100)
    ctx.drawImage(img_newbie, 680, 410, 100, 100)
    ctx.drawImage(img_wholesome, 20, 530, 100, 100)
    ctx.drawImage(img_edgy, 680, 530, 100, 100)
    ctx.drawImage(img_horny, 20, 650, 100, 100)
    ctx.drawImage(img_antihorny, 680, 650, 100, 100)
    ctx.drawImage(img_active, 20, 770, 100, 100)
    ctx.drawImage(img_lurker, 680, 770, 100, 100)
    ctx.drawImage(img_standard, 20, 890, 100, 100)
    ctx.drawImage(img_wacky, 680, 890, 100, 100)
    ctx.drawImage(img_boring, 20, 1010, 100, 100)
    ctx.drawImage(img_schizo, 680, 1010, 100, 100)
    ctx.drawImage(img_liked, 20, 1130, 100, 100)
    ctx.drawImage(img_disliked, 680, 1130, 100, 100)
    ctx.drawImage(img_discriminatory, 20, 1250, 100, 100)
    ctx.drawImage(img_inclusive, 680, 1250, 100, 100)
    ctx.drawImage(img_behaving, 20, 1370, 100, 100)
    ctx.drawImage(img_misbehaving, 680, 1370, 100, 100)
    ctx.drawImage(img_artist, 20, 1490, 100, 100)
    ctx.drawImage(img_community, 680, 1490, 100, 100)
    ctx.drawImage(img_pleasant, 20, 1610, 100, 100)
    ctx.drawImage(img_annoying, 680, 1610, 100, 100)
    ctx.drawImage(img_funny, 20, 1730, 100, 100)
    ctx.drawImage(img_unfunny, 680, 1730, 100, 100)

    //Drawing bar background
    ctx.fillStyle = "#222222"
    for (let i: number = 0; i < 15; i++){
        ctx.lineJoin = "round"
        ctx.lineWidth = 75;
        ctx.strokeRect(165, 220 + 120 * i, 470, 0)
    }

    //Drawing bars
    ctx.lineJoin = "round"
    ctx.lineWidth = 65;

    //Drawing axes
    axisDraw(ctx, score.a, 220, "#B22222", "#00F")
    axisDraw(ctx, score.b, 340, "#EDB509", "#333")
    axisDraw(ctx, score.c, 460, "#00F", "#FF0000")
    axisDraw(ctx, score.d, 580, "#C000FF", "#EE2436")
    axisDraw(ctx, score.e, 700, "#880015", "#FEC62B")
    axisDraw(ctx, score.f, 820, "#FF0000", "#FFF")
    axisDraw(ctx, score.g, 940, "#8B5320", "#89001C")
    axisDraw(ctx, score.h, 1060, "#F5DD00", "#7F3980")
    axisDraw(ctx, score.i, 1180, "#52CE3C", "#F5A9B8")
    axisDraw(ctx, score.j, 1300, "#32B5D4", "#EB0DEA")
    axisDraw(ctx, score.k, 1420, "#7F00FF", "#429B7D")
    axisDraw(ctx, score.l, 1540, "#003AAD", "#01411C")
    axisDraw(ctx, score.m, 1660, "#E88401", "#1A193A")
    axisDraw(ctx, score.n, 1780, "#05D243", "#7F66DE")

    //Top info
    if(dark){
        ctx.fillStyle = "#DDDDDD"
    } else{
        ctx.fillStyle = "#222222"
    }
    ctx.font = "700 50px Source Sans Pro"
    ctx.textAlign = "left"
    ctx.fillText("PolcompballValues", 20, 90)
    ctx.font = "30px Source Sans Pro"
    //Gallery set
    if(!gallery){
        user = "Closest Match: " + user
    }
    ctx.fillText(user, 20, 130)
    //Left column percentages
    ctx.font = "50px Source Sans Pro"
    drawText(ctx, score.a, 237.5, false, false)
    drawText(ctx, score.b, 357.5, false, true)
    drawText(ctx, score.c, 477.5, false, false)
    drawText(ctx, score.d, 597.5, false, false)
    drawText(ctx, score.e, 717.5, true, false)
    drawText(ctx, score.f, 837.5, false, false)
    drawText(ctx, score.g, 957.5, false, true)
    drawText(ctx, score.h, 1077.5, false, false)
    drawText(ctx, score.i, 1197.5, false, false)
    drawText(ctx, score.j, 1317.5, false, false)
    drawText(ctx, score.k, 1437.5, false, false)
    drawText(ctx, score.l, 1557.5, false, true)
    drawText(ctx, score.m, 1677.5, false, true)
    drawText(ctx, score.n, 1797.5, false, false)

    //Adds more text on the top
    if (dark){
        ctx.fillStyle = "#DDDDDD"
    } else {
        ctx.fillStyle = "#222222"
    }
    ctx.textAlign ="right"
    ctx.font = "300 25px Source Sans Pro"
    ctx.fillText("polcompballvalues.github.io", 780, 40)
    ctx.fillText(version, 780, 70)
    let edition: string
    if(gallery){
        edition = "User gallery"
    } else {
        if(short){
            edition = "Short test"
        } else {
            edition = "Full test"
        }
    }
    ctx.fillText(edition, 780, 100)
    //Draw array matches
    ctx.textAlign = "center"
    ctx.font="bold 30px Source Sans Pro"
    ctx.fillText("Seriousposting Axis: " + setLabel(score.a, spos_array), 400, 170)
    ctx.fillText("Allegiance Axis: "     + setLabel(score.b, alle_array), 400, 290)
    ctx.fillText("Experience Axis: "     + setLabel(score.c, expr_array), 400, 410)
    ctx.fillText("Personality Axis: "    + setLabel(score.d, pers_array), 400, 530)
    ctx.fillText("Hornyposting Axis: "   + setLabel(score.e, horn_array), 400, 650)
    ctx.fillText("Fame Axis: "           + setLabel(score.f, fame_array), 400, 770)
    ctx.fillText("Shower Axis: "         + setLabel(score.g, shwr_array), 400, 890)
    ctx.fillText("Sanity Axis: "         + setLabel(score.h, sani_array), 400, 1010)
    ctx.fillText("Relationship Axis: "   + setLabel(score.i, rela_array), 400, 1130)
    ctx.fillText("Fedposting Axis: "     + setLabel(score.j, fedp_array), 400, 1250)
    ctx.fillText("Actions Axis: "        + setLabel(score.k, actn_array), 400, 1370)
    ctx.fillText("Purpose Axis: "        + setLabel(score.l, purp_array), 400, 1490)
    ctx.fillText("Perception Axis: "     + setLabel(score.m, perc_array), 400, 1610)
    ctx.fillText("Comedy Axis: "         + setLabel(score.n, cmdy_array), 400, 1730)
    //Output Banner to Image
    let banner = <HTMLImageElement> document.getElementById("banner")
    banner.src = c.toDataURL();
}
