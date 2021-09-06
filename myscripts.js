var nameAmountMap = new Object(); // or var map = {};

var x;
var html="";
var count=1;
var html2="";
var totalAmount=0;
var finalAmountHtml="";
var perHeadAmount=0;
var finalDetailList="";
var name="";
var amount="";
var reason="";
var status=0;
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
		x=document.getElementById("form_"+count);
		name=x.elements[0].value;
		amount=x.elements[1].value;
		reason=x.elements[2].value;
		status=validate(name,amount);
		if (status==1) {
			document.getElementById('warningOne'+count).innerHTML='(please select a name)';
		} else if (status==2) {
			document.getElementById('warningTwo'+count).innerHTML='(amount cannot be blank)';
		}else if(status==3){
			document.getElementById('warningTwo'+count).innerHTML='(amount should be a number)';
		}else{
			$("#formDiv_"+count).hide();
			addingToMap(name,amount,reason);

			html="<div id=\"formDiv_"+count+"\"><form id=\"form_"+count+"\"><ul class=\"form-style-1\"><li id=\"warningOneDiv\"><label>Name:<span class=\"required\">*</span></label> <select name=\"field4\" class=\"field-select\"><option value=\"\">Select</option><option value=\"Akshay\">Akshay</option><option value=\"Jyothi\">Jyothi</option><option value=\"Latha\">Latha</option><option value=\"Madhurya\">Madhurya</option><option value=\"Madhushree\">Madhushree</option><option value=\"Mohan\">Mohan</option><option value=\"Pooja\">Pooja</option><option value=\"Pradeep\">Pradeep</option><option value=\"Sushma\">Sushma</option><option value=\"Venki\">Venki</option></select> <span id=\"warningOne"+count+"\" style=\"color: red\"></span></li><li id=\"warningTwoDiv\"><label>Amount:<span class=\"required\">*</span></label> <input type=\"text\" name=\"field1\" class=\"field-divided\" placeholder=\"Amount\" /> <span id=\"warningTwo"+count+"\" style=\"color: red\"></span></li><li><label>Reason:</label> <input type=\"text\" name=\"field2\" class=\"field-divided\" placeholder=\"Why Amount Is Spent...\" />&nbsp;</li></ul></form></div>";
			$('#outerDiv').append(html); 
		}
	});


	$('#finalSubmit').on( "click", function() {
		x=document.getElementById("form_"+count);
		name=x.elements[0].value;
		amount=x.elements[1].value;
		reason=x.elements[2].value;
		status=validate(name,amount);
            if (status==1) {
			document.getElementById('warningOne'+count).innerHTML='(please select a name)';
		} else if (status==2) {
			document.getElementById('warningTwo'+count).innerHTML='(amount cannot be blank)';
		}else if(status==3){
			document.getElementById('warningTwo'+count).innerHTML='(amount should be a number)';
		}else{

		addingToMap(name,amount,reason);
		perHeadAmount=Object.keys(nameAmountMap).length;
		perHeadAmount=Math.round(parseFloat(totalAmount/perHeadAmount));
		for (var i in nameAmountMap) {
			if(Math.round(parseFloat(nameAmountMap[i]))>perHeadAmount){
				finalAmountHtml=finalAmountHtml+"<font color=\"green\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" have paid "+nameAmountMap[i]+" and should get back Rs "+(nameAmountMap[i]-perHeadAmount)+"!!</strong></font><br>";
			}else if(Math.round(parseFloat(nameAmountMap[i]))<perHeadAmount){
				finalAmountHtml=finalAmountHtml+"<font color=\"red\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" have paid "+nameAmountMap[i]+" and should pay Rs "+(perHeadAmount-nameAmountMap[i])+" more!!</strong></font><br>";
			}else{
				finalAmountHtml=finalAmountHtml+"<font color=\"yellow\" style=\"font-family:Courier New;\" size=\"6\" class=\"redFont\"><strong>"+i+" have paid "+nameAmountMap[i]+" and that is enough!!</strong></font><br>";
			}
		} 
		document.getElementById('totAmountDetail2').innerHTML="Total Amount:-"+totalAmount+"   |   Total Person:-"+Object.keys(nameAmountMap).length+"   |   Per Head:-"+perHeadAmount;
		document.getElementById('totAmountDetail1').innerHTML="Total Amount:-"+totalAmount+"   |   Total Person:-"+Object.keys(nameAmountMap).length+"   |   Per Head:-"+perHeadAmount;
		$('#finalDetailList').append(finalAmountHtml); 
		$("#division1").hide();
		$("#finalDetails").show();
			}
			
	});

	function addingToMap(name,amount,reason){
		if (nameAmountMap[name] === undefined) {
			nameAmountMap[name]=amount;
		}else{
			nameAmountMap[name]=Math.round(parseFloat(nameAmountMap[name], 10)+parseFloat(amount, 10))+"";
		}
		totalAmount=totalAmount+Math.round(parseFloat(amount));
		showDetails(name,amount,reason);
		count++;
	}
	var htmltable="";
	function showDetails(name,amount,reason){
		if (reason==""||reason==null) {
			reason="-";
		}
		html2="<tr style=\"background-color: #f2f2f2;}\"><td align=\"center\">"+name+"</td><td align=\"center\">"+Math.round(parseFloat(amount))+"</td><td align=\"center\">"+reason+"</td></tr>"
		$(html2).appendTo("#amountList tbody");
	}

	function validate(name,amount){
		document.getElementById('warningOne'+count).innerHTML="";
		document.getElementById('warningTwo'+count).innerHTML="";
		if (name==undefined||name=="") {
			return 1;
		}else if(amount==undefined||amount==""||amount==null){
			return 2;
		}else if(!(/^\d+$/.test(amount))){
			return 3;
		}
		return 4;
	}
});
