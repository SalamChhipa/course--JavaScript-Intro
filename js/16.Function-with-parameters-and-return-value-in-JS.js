var a,b,c,d,e,total;//global variables
function bill/*function name*/(b,c,d,e/*parameters*/){
    a = b+c+d+e;
    document.write("quantity of tea: ",b/7,"|            price:",b,'<br>');
    document.write("quantity of coffee: ",c/15,"|        price:",c,"<br>");
    document.write("quaniity of cigarette: ",d/10,"|     price:",d,"<br>");
    document.write("quantity of gutkha: ",e/5,"|         price:",e,"<br>");
    return a;
}

function itemcon(no1,no2,no3,no4){
    var no1,no2,no3,no4;
    b = 7*no1;
    c = 15*no2;
    d = 10*no3;
    e = 5*no4;
    return b,c,d,e;
}
itemcon(2,1,3,2);
bill(b,c,d,e);
total = a;
document.write("your bill is : ", total);