function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
  );
}

if (getURLParameter("date") !== "null") {
  var today = new Date(getURLParameter("date"));
} else {
  var today = new Date();
}

diff = Math.abs(today-last_suspension_date); // milliseconds
var counter = Math.floor(diff / (1000 * 60 * 60 * 24)); // whole days

// Format like 4th June 2014
var dd = last_suspension_date.getDate();
var mm = last_suspension_date.getMonth() + 1; // January is 0!
var yyyy = last_suspension_date.getFullYear();
var m_names = ["January", "February", "March",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December"];
var suffix = "";
if (dd === 1 || dd === 21 || dd === 31) {
  suffix = "st";
} else if (dd === 2 || dd === 22) {
  suffix = "nd";
} else if (dd === 3 || dd === 23) {
  suffix = "rd";
} else {
  suffix = "th";
}
var date_format = dd + "" + suffix + " " + m_names[mm - 1] + " " + yyyy;

var info = "<P>Last suspension: " + date_format + "<br><a href=" + last_suspension_url + ">More info</a>";

$(document).ready(function() {
  $('#intro').html(intro);
  $('#counter').html(counter);
  $('#info').html(info);
  $('#date').html(date_format);
  $(".counter-container").css({"bottom": "0"});
  $('#counter-container').textfill({ maxFontPixels: 0 });
});

$(window).resize(function() {
  $('#counter-container').textfill( {maxFontPixels: 0} );
});
