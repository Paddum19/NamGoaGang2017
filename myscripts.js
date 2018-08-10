var name = "";
var x;
function haveMore(tag) {
	if (tag ==2) {
		if (name == "") {
			name = name + document.getElementById("Name").val();
		} else {
			name = name + "_" +document.getElementById("Name").val();
		}
		alert(name);
	}
}
