//-------------------------lab 3------------------------------------------------
//--------------start pdf one---------------------------------
// //-----------first task-----------------------------------------------------------
var userName = prompt("Enter Your Username");
var password = prompt("Enter Your Password");
if (userName.toLowerCase() == "admin" & password=="421$$") {
    alert("Welcome login success");
}
else {
    alert("Which data entered wrong");
}
// /-------------/end first task---------------------------------------------------------------

//---------second task and ((((((((  bonus   ))))))))------------------------------------------------------

var firstNum = Number(prompt("Enter Your Num 1"));
var operation = prompt("Enter The Operatoin");
var secondNum = Number(prompt("Enter Your Num 2"));
var result;
function calc(x, o, y) {
    switch (o) {
        case "+":
            result = x + y;
            alert(result + " Is the Sum")
            break;
        case "-":
            result = x - y;
            alert("The subtraction is " + result);
        break;
        case "/":
            result = x / y;
            alert("The division is "+ result)
            break;
        case "*":
            result = x * y;
            alert("The multiplication is "+result)
            break;
        case "%":
            result = x % y;
            alert("The rest of the division"+result)
            break;
    }
    var check = confirm("Do you want to add another operation");
    if (check == true) {
        var operation = prompt("Enter The Operatoin");
        var anotherNum = Number(prompt("Enter Your Num 3"));
        calc(result, operation, anotherNum);
    }
}
calc(firstNum, operation, secondNum);

// //-----------------end second task-------------------------------------------

//--------------end pdf one---------------------------------

//--------------start pdf two---------------------------------

//----------- task one-------------------------------------------
var cont = Number(prompt("enter the num you want to enter"));
var sum = 0;
var ar = [];
for (var i = 1; i <= cont; i++){
    var number = Number(prompt(`enter number ${i}`));
    ar.push[number];
    sum += number;
}
alert("The sum = "+sum)
var avg = sum / cont;
alert("The avg = "+avg);
//------------end task one-------------------------------------------

//-------------start task two-------------------------
var arr = []
var check;
function addcontact() {
    var operation = prompt("what is the operation that you want");
    if (operation == "add") {
        var contactName = prompt("Enter your name");
        var contactPhone = prompt("Enter your phone");
        var obj = {
            name: contactName,
            phone: contactPhone
        }
        arr.push(obj)
        check = confirm("Do you want to add new operation");
        while (check == true) {
            addcontact();
        }
    }
        else if(operation == "search") {
            var searchWord = prompt("Enter what you want to search");
            var ch=false;
            for (var i = 0; i < arr.length; i++) {
                if (searchWord == arr[i].name || searchWord == arr[i].phone) {
                    alert("The name is " + arr[i].name + " the phone is " + arr[i].phone);
                    ch = true;
                }
        }
        if (ch == false) {
            alert("Not founded");
        }
            check = confirm("Do you want to add new operation");
            while (check == true) {
                addcontact();
            }
        }
    
}
addcontact();

//---------------end task two-------------------------------------------------

//--------------bouns pdf two-----------------------------------------------------
var shape = prompt("Enter the shape you want").toLowerCase();
var b = 3.14;
var area;
switch (shape) {
    case "Circle".toLowerCase():
        var rad = Number(prompt("enter the radius"));
        area = b * (rad ** 2);
        alert("The area of circle is " + area);
        break;
    case "Triangle".toLowerCase():
        var base = Number(prompt("enter the base"));
        var height = Number(prompt("enter the height"));
        area = .5 * base * height;
        alert("The area of triangle is " + area);
        break;
    case "Square".toLowerCase():
        var length = Number(prompt("enter the length"));
        area = length ** 2;
        alert("The area of square is " + area);
        break;
    case "Rectangle".toLowerCase():
        var length = Number(prompt("enter the length"));
        var width = Number(prompt("enter the width"));
        area = length * width;
        alert("The area of Rectangle is " + area);
        break;
    case "Parallelogram".toLowerCase():
        var base = Number(prompt("enter the base"));
        var height = Number(prompt("enter the height"));
        area = base * height;
        alert("The area of Parallelogram is " + area);
        break;
    case "Trapezium".toLowerCase():
        var lengthOne = Number(prompt("enter the lengthOne"));
        var lengthTwo = Number(prompt("enter the lengthTwo"));
        var height = Number(prompt("enter the height"));
        area = .5(lengthOne + lengthTwo) * height;
        alert("The area of Trapezium is " + area);
        break;
    case "Ellipse".toLowerCase():
        var minor = Number(prompt("enter the half minor axis"));
        var major = Number(prompt("enter the half major axis"));
        area = b * major * minor;
        alert("The area of Ellipse is " + area);
        break;
    default:
        alert("Wrong shape");
}
//-------------end bonus pdf two-----------------------------










































// // window.alert("hello from javascribt");
// // document.getElementById("java").innerHTML = "hello world from javascribt";
// // console.log("hello world from javascribt");
// // console.log("55" * "1");
// // console.log(Number(""));
// // console.log(Number("moataz"));
// // console.log(Number("moataz") * 1);
// // var x;
// // console.log(x);
// // console.log(Number(null));
// // console.log(x * 2);

// // var num1 = window.prompt("enter your first num");

// // var num2 = window.prompt("enter your second num");

// // var result = Number(num1) + Number(num2);
// // console.log(result);

// // var x = null;
// // var y = undefined;

// // if (x == y) {
// //     console.log("true")
// // }
// // else {
// //     console.log(false);
// // }


// // if (x === y) {
// //     console.log("true")
// // }
// // else {
// //     console.log(false);
// // }

// // // for (; ;){
// // //     console.log("heloooo");
// // // } infinit loop bacause no condition found
// // var m;
// // console.log(100 + m);

// // //void function is funcion not return anythink
// // function getSum(x, y) {
// //     var sum = x + y;
// //     console.log(sum);
// // }

// // getSum(20,30);
// // console.log("ahmmed" - 10);

// // function calculateProduct(price, add, profit, tax) {
// //     price1 = price + add;
// //     price2 = price1 - (price * tax);
// //     price3 = price2 + profit;
// //     console.log(price3);
// // }
// // calculateProduct(1000, 300, 500, .1);
// // // ***********************************************
// // // decleration function
// // // ***********************************************
// // function getAvg(x, y) {
// //     var result = x + y;
// //     console.log(result);
// //     return result;
// // }
// // var c = getAvg(1000, 100);
// // console.log(c);
// // calculateProduct(c, 300, 500, .1);


// // //expretion function
// // // console.log(getTotal(10, 20));
// // // var getTotal = function (m, n) {
// // //     var sum = m + n;
// // //     return sum;
// // // }

// // //hoisting in javascribt is رفع تعريف اى فاريبل فى نص الكود الى اول الكود وبتخلى قيمتها بس هى اللى تحت
// // // وبالنسبه للفانكشن لو ديكلير فانكشن باخدها بالبادى بتاعها واطلعها فوق اول الكود لو اكسبريشن بطلع تعريفها بس والبادى بتاعها بسيبها تحت

// // var z = 10;
// // console.log(z);
// // function welcom() {
// //     console.log(z);
// //     var z = 20;
// // }
// // welcom();
// // console.log(z);

// // //self invocked function ودى ميزيتها ان كل الفاريبل اللى فيها بتبقى لوكال على مستوى بتاعها بس

// // (function () {
// //     var x = "hello from self";
// //     console.log(x);
// // })();

// // var firstName = window.prompt("enter your first name");

// // var lastName = window.prompt("enter your last name");

// // var fullName = firstName +" "+ lastName;
// // console.log("my full name is " +fullName);


// // var num1 = window.prompt("enter your first num");

// // var num2 = window.prompt("enter your second num");

// // var result = Number(num1) + Number(num2);
// // console.log(num1 +" + "+ num2 +" = "+result);
// // var x = 1;
// // switch (x) {
// //     case 1:
// //         alert("one");
// //     case 2:
// //         alert("two");
// // }

// // var r = null;
// // alert(typeof (r));

// //number one-------------------------------------
// var age;
// function getcheck() {
//     var check = window.confirm("do you want to add another age ?");
//         if (check) {
//             getage(age);
//         }
//         else {
//             alert("done");
//         }
// }
// function getage(agee) {
//     var age = Number(window.prompt("enter your age"));
//     if (age < 0) {
//         console.log("your input is wrong");
//     }
//     else if (age >= 1 && age <= 10) {
//         alert("the status of the user is Child");
//         getcheck()
//     }
//     else if (age >= 11 && age <= 18) {
//         alert("the status of the user is Teenager");
//         getcheck();
//     }
//     else if (age >= 19 && age <= 50) {
//         alert("the status of the user is Grown Up");
//         getcheck();
//     }
//     else if ( age > 50) {
//         alert("the status of the user is Old");
//         getcheck();
//     }
// }
// getage(age);
// // //finish number one-----------------------------------

// //number two-----------------------------------------------
// var namee = window.prompt("enter string");
// var count = 0;
// for (var i = 0; i < namee.length; i++){
//     if (namee.charAt(i) == "a" || namee.charAt(i) == "e" || namee.charAt(i) == "o" || namee.charAt(i) == "u" || namee.charAt(i) == "i") {
//         count++;
//     }
    
// }
// alert("the count of vowels in string is "+count);
// // //finish number two-----------------------------------

// var clock = Number(window.prompt("enter hour clock"));
// if (clock > 24 || clock < 0 ) {
//     alert("wrong hour clock");
// }
// else {
//     if (clock >= 0 && clock <= 12) {
//         alert(clock +" AM");
//     }
//     else if (clock >12 && clock <= 24) {
//         alert((clock - 12) + " PM");
//         alert("done");
//     }
// }
    