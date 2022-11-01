var a = ["salam","tak"];
var b = [21,"graduate"];
document.write(a,"<br><br>",b,"<br><br>these are two arrays<br><br>");
var c = a.concat(b,"alive");//syntax of concatination
document.write("now the addition will be <br>",c);
document.write("<br><br>now lets convert array in a single string<br>by join method");
var d = c.join("+");//syntax of joining
document.write("<br><br>",d);
