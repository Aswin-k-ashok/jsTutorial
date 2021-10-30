var a=10;
var b=20;

document.write(a+b,"<br>"); //addition
document.write(a-b,"<br>"); //subtraction
document.write(a*b,"<br>"); //multiplication
document.write(a/b,"<br>"); //division
document.write(a%b,"<br>"); //modules
document.write(a++,"<br>"); //increment
document.write(a--,"<br>"); //decrement
document.write(b**2,"<br>"); //exponet

//assignment operators

var num =10;
var x=4;

num += x; // num -= x; num *=x; num/=x; num%=x ;
document.write(num);


document.write("<br>")
// comparison operators 

var c1= 10;
var c2= 20;
var c3= "10";

document.write (c1==c2, "<br>"); //check the values of the variables
document.write (c3==c1, "<br>"); 
document.write (c3 === c1, "<br>");  // check the values and the datatypes of the variables 
// != , >= , <= ;



// logical operators

document.write(c1==10 && c2==20); // true if both statements are true 
document.write(c1==10 || c2==20); // true if one of the statements are true
document.write(!(c1==10));  // true if the codition if the condition is not true