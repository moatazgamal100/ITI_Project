// window.alert("hello from javascribt");
// document.getElementById("java").innerHTML = "hello world from javascribt";
// console.log("hello world from javascribt");
// console.log("55" * "1");
// console.log(Number(""));
// console.log(Number("moataz"));
// console.log(Number("moataz") * 1);
// var x;
// console.log(x);
// console.log(Number(null));
// console.log(x * 2);

// var num1 = window.prompt("enter your first num");

// var num2 = window.prompt("enter your second num");

// var result = Number(num1) + Number(num2);
// console.log(result);

// var x = null;
// var y = undefined;

// if (x == y) {
//     console.log("true")
// }
// else {
//     console.log(false);
// }


// if (x === y) {
//     console.log("true")
// }
// else {
//     console.log(false);
// }

// // for (; ;){
// //     console.log("heloooo");
// // } infinit loop bacause no condition found
// var m;
// console.log(100 + m);

// //void function is funcion not return anythink
// function getSum(x, y) {
//     var sum = x + y;
//     console.log(sum);
// }

// getSum(20,30);
// console.log("ahmmed" - 10);

// function calculateProduct(price, add, profit, tax) {
//     price1 = price + add;
//     price2 = price1 - (price * tax);
//     price3 = price2 + profit;
//     console.log(price3);
// }
// calculateProduct(1000, 300, 500, .1);
// // ***********************************************
// // decleration function
// // ***********************************************
// function getAvg(x, y) {
//     var result = x + y;
//     console.log(result);
//     return result;
// }
// var c = getAvg(1000, 100);
// console.log(c);
// calculateProduct(c, 300, 500, .1);


// //expretion function
// // console.log(getTotal(10, 20));
// // var getTotal = function (m, n) {
// //     var sum = m + n;
// //     return sum;
// // }

// //hoisting in javascribt is رفع تعريف اى فاريبل فى نص الكود الى اول الكود وبتخلى قيمتها بس هى اللى تحت
// // وبالنسبه للفانكشن لو ديكلير فانكشن باخدها بالبادى بتاعها واطلعها فوق اول الكود لو اكسبريشن بطلع تعريفها بس والبادى بتاعها بسيبها تحت

// var z = 10;
// console.log(z);
// function welcom() {
//     console.log(z);
//     var z = 20;
// }
// welcom();
// console.log(z);

// //self invocked function ودى ميزيتها ان كل الفاريبل اللى فيها بتبقى لوكال على مستوى بتاعها بس

// (function () {
//     var x = "hello from self";
//     console.log(x);
// })();

// var firstName = window.prompt("enter your first name");

// var lastName = window.prompt("enter your last name");

// var fullName = firstName +" "+ lastName;
// console.log("my full name is " +fullName);


// var num1 = window.prompt("enter your first num");

// var num2 = window.prompt("enter your second num");

// var result = Number(num1) + Number(num2);
// console.log(num1 +" + "+ num2 +" = "+result);
// var x = 1;
// switch (x) {
//     case 1:
//         alert("one");
//     case 2:
//         alert("two");
// }

// var r = null;
// alert(typeof (r));

//number one-------------------------------------
var age;
function getcheck() {
    var check = window.confirm("do you want to add another age ?");
        if (check) {
            getage(age);
        }
        else {
            alert("done");
        }
}
function getage(agee) {
    var age = Number(window.prompt("enter your age"));
    if (age < 0) {
        console.log("your input is wrong");
    }
    else if (age >= 1 && age <= 10) {
        alert("the status of the user is Child");
        getcheck()
    }
    else if (age >= 11 && age <= 18) {
        alert("the status of the user is Teenager");
        getcheck();
    }
    else if (age >= 19 && age <= 50) {
        alert("the status of the user is Grown Up");
        getcheck();
    }
    else if ( age > 50) {
        alert("the status of the user is Old");
        getcheck();
    }
}
getage(age);
// //finish number one-----------------------------------

//number two-----------------------------------------------
var namee = window.prompt("enter string");
var count = 0;
for (var i = 0; i < namee.length; i++){
    if (namee.charAt(i) == "a" || namee.charAt(i) == "e" || namee.charAt(i) == "o" || namee.charAt(i) == "u" || namee.charAt(i) == "i") {
        count++;
    }
    
}
alert("the count of vowels in string is "+count);
// //finish number two-----------------------------------

var clock = Number(window.prompt("enter hour clock"));
if (clock > 24 || clock < 0 ) {
    alert("wrong hour clock");
}
else {
    if (clock >= 0 && clock <= 12) {
        alert(clock +" AM");
    }
    else if (clock >12 && clock <= 24) {
        alert((clock - 12) + " PM");
        alert("done");
    }
}
    