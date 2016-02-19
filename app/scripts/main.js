/* global channels */
/* global $ */
channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "ogamingsc2", "comster404", "meteos"];

$("#button").click(function () {
    channels.forEach(twitchAPI)
});

function twitchAPI(element, index) {
    var url = 'https://api.twitch.tv/kraken/streams/' + element;
    $("#channels").append("<div class='jumbotron' id='" + element + "'><h4><a href='http://twitch.tv/" + element + "'>" + element + "</a></h4></div>");
    $("#" + element).append("<div class='text-danger status'>Offline</div>");
    $.getJSON(url, function (data) {
        if (data.status == 422) {
            console.log(data.status);
            $("#" + element).children(".status").html("<div class='text-danger'>Account Closed</div>");
        } else {
            $("#" + data.stream.channel.name).children(".status").html("<div class='text-success'>" + data.stream.game + ": " + data.stream.channel.status + "</div>");
        }
    });
}    

