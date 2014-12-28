var formattedName = HTMLheaderName.replace("%data%", "Anton");
var formattedRole = HTMLheaderRole.replace("%data%", "aerospace engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);