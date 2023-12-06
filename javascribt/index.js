// //-------------------------lab 3------------------------------------------------
// //--------------start pdf one---------------------------------
// // //-----------first task-----------------------------------------------------------
var userName = prompt("Enter Your Username");
var password = prompt("Enter Your Password");
if (userName.toLowerCase() == "admin" & password=="421$$") {
    alert("Welcome login success");
}
else {
    alert("Which data entered wrong");
}
// // /-------------/end first task---------------------------------------------------------------

// //---------second task and ((((((((  bonus   ))))))))------------------------------------------------------

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

// // //-----------------end second task-------------------------------------------

// //--------------end pdf one---------------------------------

// //--------------start pdf two---------------------------------

// //----------- task one-------------------------------------------
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
// //------------end task one-------------------------------------------

// //-------------start task two-------------------------
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

// //---------------end task two-------------------------------------------------

// //--------------bouns pdf two-----------------------------------------------------
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

// ---------------------------- 10 methods of object ---------------------------------------------------
      //  (1) Object.key

      // Object.key => return the keys of the object in an array not the values of the key!

    // let obj = {
    // name : "moataz",
    // age: 25,
    // isGraduated: true
    // }

    // let res = Object.keys(obj);
    // console.log(res) // ['name', 'age', 'isGraduated']
    // console.log(obj) // {name: 'moataz', age: 25, isGraduated: true}

            // -------------------------------------------------

      //  (2) Object.values() 

        // Object.values => return the values of the object in an array 
    // let obj = {
    // name : "moataz",
    // age: 25,
    // isGraduated: true
    // }

    // let res = Object.values(obj);
    // console.log(res) //  ['moataz', 25, true]

             // -------------------------------------------------

      //  (3) Object.create() 

        // Object.create =>   Inherite the property to another  new object, and can add new property to the new object without adding it at the old one
    //     let obj = {
    //     name : "sara",
    //     age: 25,
    //     isGraduated: true
    //   }

    //   let newObject = Object.create(obj);

    //   newObject.city = "Alex";
    //   newObject.name = "moataz gamal"

    //   console.log(newObject)  //{city: 'Alex', name: 'moataz gamal'}

       // -------------------------------------------------

      //  (4) Object.assign() 

        // Object.assign => add the property of two objects into a new object, if a property is duplicated takes the last one and update it in the first obj
    //     let obj = {
    //     name : "moataz",
    //     age: 25,
    //     isGraduated: true
    //   }

    //   let obj2 = {
    //     name : "mohamed",
    //     city: "alex",
    //     capital: "Cairo"
    //   }

    //   let res = Object.assign(obj, obj2);
    //   console.log(obj) // {name: 'mohamed', age: 25, isGraduated: true, city: 'alex', capital: 'Cairo'}
    //   console.log(obj2) // {name: 'mohamed', city: 'alex', capital: 'Cairo'}
    //   console.log(res) // {name: 'mohamed', age: 25, isGraduated: true, city: 'alex', capital: 'Cairo'}

      // -------------------------------------------------

      //  (5) Object.entries() 

        // Object.entries => return an array each element of it is an array of the property(key & value) of the object

    //     let obj = {
    //     name : "moataz",
    //     age: 25,
    //     isGraduated: true
    //   }
    //   let newObject = Object.entries(obj);

    //   console.log(newObject)
    //   [Array(2), Array(2), Array(2)]
    //   [['name', 'moataz'], ['age', 25] , ['isGraduated', true]]

      // -------------------------------------------------

      //  (6) Object.fromEntries() 

        // Object.fromEntries => transforms a list of key-value pairs into an object.

    //     let list = [['name', 'sara'], ['age',25]];

    //     let obj = Object.fromEntries(list);

    //    console.log(obj); // {name: 'moataz', age: 25}

      // -------------------------------------------------

      //  (7) Object.freeze() 

        // Object.freeze => makes a property or  the  whole obj's properties are fixed can't be updated
    //     let obj = {
    //     name : "moataz",
    //     age: 25,
    //     isGraduated: true
    //   }


    //   // Object.freeze(obj.name); // this freezes only the property name
    //   Object.freeze(obj); // this freeze all properties
    //   obj.name= "mohamed";
    //   obj.age= 30;
    //   console.log(obj.name); //moataz
      // console.log(obj.age); //30

      // console.log(obj)

      // -------------------------------------------------

      //  (8) Object.hasOwn() 

        // Object.hasOwn => return ( true / false ) if the obj has the proerty return true and vise versa
        //Object.hasOwn(x, y)
        // x : is the object name
        // y : is the key I ask about
      //   let obj = {
      //   name : "moataz",
      //   age: 25,
      //   isGraduated: true
      // }

      // let yes = Object.hasOwn(obj, 'name')
      // let no = Object.hasOwn(obj, 'city')
      // console.log(yes); // true
      // console.log(no); // false

      // -------------------------------------------------

      //  (9) Object.is() 

        // Object.is => determines whether two values are the same value.

        // console.log(Object.is('1',1)) //false
        // console.log(Object.is(1,1)) //true
        // console.log(Object.is([],{})) //false
        // console.log(Object.is('e','-e')) //false
      
        // -------------------------------------------------

      // //  (10) Object.seal() 

      //   // Object.seal => the property which is sealed can't be deleted but can be updated
        
      //   let obj = {
      //   name : "moataz",
      //   age: 25,
      //   isGraduated: true
      // }
      // Object.seal(obj); // the obj is sealed with out it the expected value from delete would be true
      // console.log(delete obj.name); //false
      // console.log(obj.name); // moataz


// ///////////////Array methods///////////////////////////////////
// var arr = [2, 3, 4, 5, 6];

// //[1]The array method toString()
// // converts an array to a string of(comma separated) array values
// alert(arr.toString());
// /////////////////////////////////

// //[2]The join() method also joins all array elements into a string
// //in addition you can specify the separator
// alert(arr.join("_"));
// //////////////////////////////////////////////////

// //[3]The array method push()
// //Add new element to array in the last of array
// arr.push(7);
// alert(arr);
// //////////////////////////////////////////////

// //[4]The array method pop()
// //Remove the last element of array
// arr.pop();
// alert(arr);
// /////////////////////////////////////////

// //[5]The array method unshift()
// //Add new element to array in the first of array
// arr.unshift(8);
// alert(arr);
// /////////////////////////////////////////

// //[6]The array method unshift()
// //Remove the first element of array
// arr.shift();
// alert(arr);
// /////////////////////////////////////////


// // [7]The concat() method creates a new array by merging
// // (concatenating) existing arrays
// var arr2=arr.concat(7, 8, 9)
// alert(arr2);
// /////////////////////////////////////////

// //[8]The splice() method adds or remove and if necessary add new items in their place
// arr.splice(1, 2, 8,9)
// alert(arr);
// /////////////////////////////////////////////////////////

// //[9]The slice() method slices out a piece of an array
// alert(arr.slice(2, 5));
// ////////////////////////////////////////////////

// // [10]The flat() method creates a new array
// // with sub - array elements concatenated to a specified depth.
// var arr3 = arr.flat();
// alert(arr3);
// ///////////////////////////////////////////////////////////




//-----------------nested function and explain the closure -> lexicalenvironment-----------------------------------------

// A closure is the combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
// closures are created every time a function is created, at function creation time.

// function init() {
//     var name = "moataz"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       alert(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// ///////////////////////////////////////////////////////////////////////////////////
// //////////////////// solve problem solving//////////////////////////////////////////////////

var houseRang = [];
var countApple = 0;
var countOrange = 0;

var starPoint = Number(prompt("Enter the start point of home"));
var endPoint = Number(prompt("Enter the end point of home"));
var locationAppleTree = Number(prompt("Enter the locationAppleTree point "));
var locationOrangeTree = Number(prompt("Enter the locationOrangeTree point "));
var numberOfApple = Number(prompt("Enter the number of apple "));
var numberOfOrande = Number(prompt("Enter the number of orande "));
var appArr = [];
var oranArr = [];

function getCount(startPointOfHome, endPointOfHome,locAppleTree,locOrangTree,applesFall,orangsFall) {
    for (var i = startPointOfHome; i<= endPointOfHome; i++){
        houseRang.push(i);
    }
    
    for (var y = 0; y< applesFall; y++){
        var app = Number(prompt("Enter apple distance of fall"));
        appArr.push(app);
        if (houseRang.includes(appArr[y]+locAppleTree) == true) {
            countApple++;
        }
    }
    for (var d =0; d<orangsFall; d++){
        var oran = Number(prompt("Enter orange distance of fall"));
        oranArr.push(oran);
        if (houseRang.includes(oranArr[d]+locOrangTree) == true) {
            countOrange++;
        }
    }
    alert("the number of apple fallen in house = " + countApple);
    alert("the number of orange fallen in house = " + countOrange);
}

getCount(starPoint, endPoint,locationAppleTree,locationOrangeTree,numberOfApple,numberOfOrande);


///////////////////////////////////////////////////////////////////////////////////
//////////////////// end problem solving//////////////////////////////////////////////////










































//----------my own code----------------------------------------------------

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
    