/* global channels */
/* global $ */
channels = ["ogamingsc2", "comster404", "freecodecamp", "sheevergaming", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];

$("#button").click(function () {
    channels.forEach(twitchAPI)
});

function twitchAPI(element, index) {
    var url = 'https://api.twitch.tv/kraken/streams/' + element + '?callback=?';
    $("#channels").append("<div class='jumbotron' id='" + element + "'><h4><a href='http://twitch.tv/" + element + "'>" + element + "</a></h4></div>");
    $.getJSON(url, function (data) {
        if (data.status == 422) {
            $("#" + element).append("<div class='text-danger'>Account Closed</div>");
        } else if (data.stream == null) {
            $("#" + element).append("<div class='text-danger status'>Offline</div>");
        } else {
            $("#" + data.stream.channel.name).append("<div class='text-success'>" + data.stream.game + ": " + data.stream.channel.status + "</div>");
            
        }
    });
}    

