var name = "";
var x;
function haveMore(tag) {
	x=document.getElementById("form");
	if (tag ==2) {
		
		if (name == "") {
			name = name + x.elements[0].value ;
		} else {
			name = name + "_" +x.elements[0].value ;
		}
		alert(name);
	}
}
