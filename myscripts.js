var nameAmountMap = new Object(); // or var map = {};

var x;
var html="";
function haveMore(tag) {
	x=document.getElementById("form");
	if (tag ==2) {
		html="<div id=\"formDiv_1\"><form id=\"form_1\"><ul class=\"form-style-1\"><li><label>Name:<span class=\"required\">*</span></label><select name=\"field4\" class=\"field-select\"><option value=\"Akshay\">Akshay</option><option value=\"Latha\">Latha</option><option value=\"Likith\">Likith</option><option value=\"Madhurya\">Madhurya</option><option value=\"Mohan\">Mohan</option><option value=\"Pooja\">Pooja</option><option value=\"Pradeep\">Pradeep</option><option value=\"Sushma\">Sushma</option><option value=\"Venki\">Venki</option></select></li><li><label>Amount:<span class=\"required\">*</span></label> <input type=\"text\" name=\"field1\" class=\"field-divided\" placeholder=\"Amount\" />&nbsp;</li><li><label>Reason:</label> <input type=\"text\" name=\"field2\" class=\"field-divided\" placeholder=\"Why Amount Is Spent...\" />&nbsp;</li></ul></form></div>ac";
		nameAmountMap["name"] = name + x.elements[0].value ;
		alert(name);
	}
}
$(document).ready(function(){
	$('#haveMore').on( "click", function() {
		alert(1);
	});
});
