<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Guru Registration Form</title>
</head>
<body>
<h1>Find Amount Per Head</h1>
 <script type="text/javascript">
   function add() {
     var element = document.createElement("input");
     element.setAttribute("type", "text");
     element.setAttribute("name", "mytext");
    var spanvar = document.getElementById("myspan");
    spanvar .appendChild(element);
   }
</SCRIPT>
<div id="certificationtog">
   <p class="setting">
      <input type="button" id="addrows" name="addrows" class="addperson" 
        value="Add Rows" onclick="add();">
      <input type="button" id="removerows" class="removerows" 
        value="Delete Rows" />  
      <span id="myspan"></span>
      <br><br>
      <span style="width: 0px; margin-left: 20px; font-weight: bold; float: none;">
        Diploma/Certificate:
      </span>
   </p>
</div>
</body>
</html>
