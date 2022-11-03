let array = ["salam","tak","chhipa","graduate",21,"unemployeed"];
let a = array.slice(3,6);//will assign index number 3,4,5 it only assign values to other but does not affect the real array
document.write("main array :<br> <br>",array,"<br><br>lets see the sliced one[from 3 to 6]<br><br>",a);
document.write("lets use splice which directly affect main array :")
array.splice(3,2,"alive");//will insert alive after 3 index while delete graduate and 21
document.write("<br><br>",array);