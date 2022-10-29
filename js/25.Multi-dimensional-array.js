let a = [["salam","tak",21,"graduate"],["umer","tak",19,"1st year"],["ali asgar","chauhan",19,"1st year"],["uzair ahmed","bhati",18,"1st year"]];
document.write("<table border=5px>");
for(let b = 0; b < a.length; b++){
    document.write("<tr>");
    document.write("<td>",a[b],"</td>");
    document.write("</tr>");
}
document.write("</table>");