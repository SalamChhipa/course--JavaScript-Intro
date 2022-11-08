let array = [2,3,4,7,9,10,"2"];
var a = "2";
function chksrt(val){
    return (val === a );
}
document.write("<br> lets find if '2' exist or not and if true we <br> we will find index number <br>");
let b = array.find(chksrt);
document.write(b,"<br>lets check index number :");
b = array.findIndex(chksrt);
document.write(b);