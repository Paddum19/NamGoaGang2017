var name = "";
var x;
function haveMore(tag) {
	alert("here "+tag);
	if (tag == "havemore") {
		x = document.getElementById("form").submit();
		if (name == "") {
			name = name + x[0];
		} else {
			name = name + "_" + x[0];
		}
		alert(name);
	}
}
