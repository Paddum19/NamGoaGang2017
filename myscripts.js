var nameAmountMap = new Object(); // or var map = {};

var x;
var html="";
var count=1;
var html2="";
var totalAmount=0;
var finalAmountHtml="";
var perHeadAmount=0;
var finalDetailList="";
$(document).ready(function(){
	$("#showDetails").hide();
	$("#finalDetails").hide();

	$('#amountSummary').on( "click", function() {
		$("#finalDetails").show();	
		$("#showDetails").hide();
	});

	 
	
	$('#reload1').on( "click", function() {
		window.location.reload();
	});
	
	$('#reload2').on( "click", function() {
		window.location.reload();
	});
	
	$('#details').on( "click", function() {

		var y = document.getElementById("showDetails");
		if (y.style.display === "none") {
			$("#finalDetails").hide();
			y.style.display = "block";
		} else {
			$("#finalDetails").show();
			y.style.display = "none";
		}
	});

	$('#haveMore').on( "click", function() {
		$("#formDiv_"+count).hide();
		addingToMap();

		html="<div id=\"formDiv_"+count+"\"><form id=\"form_"+count+"\"><ul class=\"form-style-1\"><li><label>Name:<span class=\"required\">*</span></label><select name=\"field4\" class=\"field-select\"><option value=\"Akshay\">Akshay</option><option value=\"Latha\">Latha</option><option value=\"Likith\">Likith</option><option value=\"Madhurya\">Madhurya</option><option value=\"Mohan\">Mohan</option><option value=\"Pooja\">Pooja</option><option value=\"Pradeep\">Pradeep</option><option value=\"Sushma\">Sushma</option><option value=\"Venki\">Venki</option></select></li><li><label>Amount:<span class=\"required\">*</span></label> <input type=\"text\" name=\"field1\" class=\"field-divided\" placeholder=\"Amount\" />&nbsp;</li><li><label>Reason:</label> <input type=\"text\" name=\"field2\" class=\"field-divided\" placeholder=\"Why Amount Is Spent...\" />&nbsp;</li></ul></form></div>";
		$('#outerDiv').append(html);  
	});


	$('#finalSubmit').on( "click", function() {
		addingToMap();
		perHeadAmount=Object.keys(nameAmountMap).length;
		perHeadAmount=(totalAmount/perHeadAmount)
		for (var i in nameAmountMap) {
			if(parseInt(nameAmountMap[i])>perHeadAmount){
				finalAmountHtml=finalAmountHtml+"<font color=\"green\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" shoukd get back Rs "+(nameAmountMap[i]-perHeadAmount)+"!!</strong></font><br>";
			}else if(parseInt(nameAmountMap[i])<perHeadAmount){
				finalAmountHtml=finalAmountHtml+"<font color=\"red\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" shoukd pay Rs "+(perHeadAmount-nameAmountMap[i])+" more!!</strong></font><br>";
			}else{
				finalAmountHtml=finalAmountHtml+"<font color=\"yellow\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" have paid full amount!!</strong></font><br>";
			}
		} 
		$('#finalDetailList').append(finalAmountHtml); 
		$("#division1").hide();
		$("#finalDetails").show();
	});

	function addingToMap(){
		x=document.getElementById("form_"+count);
		if (nameAmountMap[x.elements[0].value] === undefined) {
			nameAmountMap[x.elements[0].value]=x.elements[1].value;
		}else{
			nameAmountMap[x.elements[0].value]=(parseInt(nameAmountMap[x.elements[0].value], 10)+parseInt(x.elements[1].value, 10))+"";
		}
		totalAmount=totalAmount+(parseInt(x.elements[1].value));
		showDetails(x.elements[0].value,x.elements[1].value,x.elements[2].value);
		count++;
	}

	function showDetails(name,amount,reason){
		html2="<h3>"+name+"  :: Rs "+amount+"::"+reason+"</h3>";
		$('#amountList').append(html2);
	}
});
