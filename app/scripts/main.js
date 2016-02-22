/* global channels */
/* global $ */
channels = ["ogamingsc2", "comster404", "freecodecamp", "sheevergaming", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];

$(function () {
    $("#channels").html("")
    channels.forEach(twitchAPI)
});

function twitchAPI(element, index) {
    var url = 'https://api.twitch.tv/kraken/streams/' + element + '?callback=?';
    $("#channels").append("<div class='jumbotron row' id='" + element + "'>");
    $.getJSON(url, function (data) {
        if (data.status == 422) {
            $("#" + element).append("<img class='col-xs-2 profileImage' src='http://image005.flaticon.com/1/svg/0/827.svg'>");
            $("#" + element).append("<div class='col-xs-2'><h4><a href='http://twitch.tv/" + element + "'>" + element + "</a></h4></div></div>");
            $("#" + element).append("<div class='text-danger col-xs-8'><h4>Account Closed</h4></div>");
        } else if (data.stream == null) {
            $("#" + element).append("<img class='col-xs-2 profileImage' src='http://image005.flaticon.com/1/svg/0/827.svg'>");
            $("#" + element).append("<div class='col-xs-2'><h4><a href='http://twitch.tv/" + element + "'>" + element + "</a></h4></div></div>");
            $("#" + element).append("<div class='text-danger col-xs-8'><h4>Offline</h4></div>");
        } else {
            $("#" + element).append("<img class='col-xs-2 profileImage' src='" + data.stream.channel.logo + "'>");
            $("#" + element).append("<div class='col-xs-2'><h4><a href='http://twitch.tv/" + element + "'>" + element + "</a></h4></div></div>");
            $("#" + data.stream.channel.name).append("<div class='text-success col-xs-8'><h4>" + data.stream.game + ": " + data.stream.channel.status + "</h4></div>");
        }
    });
}    

