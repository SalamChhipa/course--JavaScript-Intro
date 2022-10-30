let array = ["salam","chhipa","tak",21,"graduate",];
document.write("lets take a look on what we got in our array<br><br>");
document.write(array,"<br><br>");//whole array will be printed
document.write("graduate does not tell about the degree properly<br><br>");
array[4] = "Bachelor of science";//modifying the fifth element
document.write("lets see the changed array :<br> <Br>");
document.write(array,"<br><br>");
document.write("we can see the element tak is not important lets remove this : <br><br>");
delete array[2];//deleting 3rd element of array
document.write("lets see the final result<br><br>");
document.write(array);


