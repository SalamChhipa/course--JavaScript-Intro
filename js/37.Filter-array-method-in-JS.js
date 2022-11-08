let array1 = [1,3,4,5,6,8,23,45,56,76];
function div2(val){
    return val % 2 == 0;
}
let array2 = array1.filter(div2);
document.write("array1 is :" + array1);
document.write("<br>extracted array is :" + array2);