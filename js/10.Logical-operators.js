document.write('using all of them combinely pls check the console<br>');
var a,b;
document.write('given is a=20 b= 15<br>');
document.write('to match with a=5 b=10<br>');
a=20;
b=15;
if(a==5 && b==10){//if both are it will run
    document.write('both matches');
}else if (a==5 || b==10){//if one is true it will run
    document.write('one matches');
}else if(a!=5 && b!=10){
    document.write("nothing matches");
}

