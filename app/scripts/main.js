/* global $ */


$("#button").click(function () {
    var channel = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "ogamingsc2", "comster404", "meteos"];
    for (var j = 0; j < channel.length; j++) {
        var url = 'https://api.twitch.tv/kraken/streams/' + channel[j];
        $("#channel").append("<div class='jumbotron' id='" + channel[j] + "'>" + channel[j] + "</div>");
        $('#' + channel[j]).append("<div>" + url + "</div>");
        $.getJSON(url, function (data) {
            //console.log(data.stream.game);
            //$("#" + channel[j]).append("<div>" + data.stream.game + "</div>");
            //$("#" + data.stream.channel.name).append("<div>" + data.stream.game + "</div>")
            if (data.stream === null) {
                $("#" + data.stream.channel.name).append("<div> null </div>");
            } else {
                $("#" + data.stream.channel.name).append("<div>" + data.stream.game + "</div>");
                //$("#channel").append("<div class='jumbotron'>" + channel[j] + "<div>" + data.stream.game + "</div></div>"); 
            
            }
        });

    };
});