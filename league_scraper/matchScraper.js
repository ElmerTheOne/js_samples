/*
	Use on https://matchhistory.euw.leagueoflegends.com/en/#match-history/
	You need to scroll down to the bottom before running the script.
	I could've used Riot's API, though that does not display private games.
	Maybe if Riot implements an API with access thorugh O2 Auth.
	
*/

var games = document.getElementsByClassName("game-summary");
var kills = 0;
var deaths = 0;
var assists = 0;
var wins = 0;
var losses = 0;
var n_games = games.length;
var time_played = 0;
for(var i = 0; i < games.length;i++) {
    console.log(i);
    //  Here we can get the specific ID if we're smart.
    //  we need the id of the parent div, and get elementbyid.
    var game_id = games[i].id;
    var str = ""+game_id;
    var id_num = parseInt(str.split('-')[2]);
    //console.log(id_num);
    var id = game_id + "-container"
    var duration_offset = -2;
    var kda_offset = -4;


    var container = document.getElementById(id);
    var winBar = document.getElementById("result-marker-" + (id_num - 1));
    var kda_plate = document.getElementById("kda-plate-" + (id_num + kda_offset));
    var duration = document.getElementById("date-duration-" + (id_num + duration_offset));
    var kda = kda_plate.children[0].children;
    kills += parseInt(kda[0].innerText);
    deaths += parseInt(kda[1].innerText);
    assists += parseInt(kda[2].innerText);
    var duration_text = duration.innerText;
    var time_units = duration_text.split(':');

    //  include hours
    var inc = 1;
    for(var i2 = time_units.length -1; i2 >= 0; i2--) {
        var seconds = time_units[i2] * inc;
        time_played += seconds;
        inc *= 60;
    }



    //  kda children

    if(winBar.classList[0] == "game-summary-victory") {
        wins++;
    } else {
        losses++;
    }

    //n_games++;

}


//  Averages.
console.log("Games played: " + n_games);
console.log("Games won: " + wins);
console.log("Games lost: " + losses);
console.log("Totals:");
console.log("Kills: " + kills);
console.log("Deaths: " + deaths);
console.log("Assists: " + assists);
console.log("Time played in days: " + (time_played / (24 * 3600)));
console.log("Averages per match: ");
console.log("Average Kills: " + kills / n_games);
console.log("Average Deaths: " + deaths / n_games);
console.log("Average Assists: " + assists / n_games);
