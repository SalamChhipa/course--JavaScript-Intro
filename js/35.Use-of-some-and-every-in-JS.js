let array = [2,4,6,8,10,12];
let b;
function grtsix(num){
    return num >=6
}
//if we use some some it will give true
b = array.some(grtsix);
document.write("we used some : ",b);
//if we use every it willgive  false cuz it will check every element 
b = array.every(grtsix);
document.write("<br> <br>we used every : ",b);