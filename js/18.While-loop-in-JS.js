var a = 1;
function table(tbl){
    let b;
    /*initialization*/ while(a<=10/*condition part*/){
    b = a*tbl;
    document.write(b,"<br>");//statement  that will repeat
    a= a+1;//increment part    
       }
}
table(2);
document.write("you can change the parameter of table function<br>using console so you can see table of other numbers");
