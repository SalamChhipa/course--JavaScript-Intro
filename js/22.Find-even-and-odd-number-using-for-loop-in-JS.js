document.write("finding even and odd numbers to 10 using for loop:<br> ");
document.write("even:<br>")
for (let a = 1; a <= 10; a++){
    if(a % 2 == 0){
        document.write(a,"<br>");
    }
}
document.write("odd :<br>")
for ( a = 1; a <= 10; a++){
    if(a % 2 != 0){
        document.write(a,"<br>");
    }
}