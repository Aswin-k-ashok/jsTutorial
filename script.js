var a =10;  //if else statement

if (a>0){
    document.write("<p> the number is positive</p>");
}
else if(a<0){
    document.write("<p> the number is negetive");
}
else{
    document.write("<p>the number is zero</p>")
}

//switch statement

var a = "B"  ;

switch(a){
    case "A":
        document.write("Apple");
    break;
    case "B":
        document.write("ball");
    break;
    default:
        document.write("go away");
    break;
}