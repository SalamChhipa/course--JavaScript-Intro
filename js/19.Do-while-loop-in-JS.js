var a=1;
function table(tbl){
    let b;
    do{
        b=a*tbl;
        document.write(b,"<br>");
        a= a+1;
    }while(a<=10)
}
table(3);
document.write("you can change the parameter of table function<br>using console so you can see table of other numbers");
