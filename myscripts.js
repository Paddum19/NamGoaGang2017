var name = "";
var x;
function haveMore(tag) {
	if (tag ==2) {
		if (name == "") {
			name = name + document.getElementById("field4").val();
		} else {
			name = name + "_" +document.getElementById("field4").val();
		}
		alert(name);
	}
}
