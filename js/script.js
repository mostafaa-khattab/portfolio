
// DOM (Document Object Model) , BOM (Browser Object Model)

// window.alert("welcome external");
// document.getElementById("demo").innerHTML = "hello";
// console.log("welcome console");

// variable
// var x;
// console.log(x); // undefined

// x = 10;
// console.log(x); // 10

// +  -  * /  2^2  %

// concatenation (+)

// console.log( Number("hello") + 5 + 5 + 5 ) // 315 , 3555
// console.log("hello" + 5 + 5 * 3 + "ali") // hello515ali
// console.log(true + 5)

// console.log(  Number(null)  ) // 0

// var text = Number(window.prompt("Enter Your Age "))
// console.log(text)

// If condition

// var x = null;
// var y = undefined

// if(x == y){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// =
// ==  identical operator
// ===

// declaration Assignment value

// don't number , # , $ , @....
// reserved word (if)
// var userName = "ali"
// camel case  -> userNameAndPass
// upper case USERNAME , lower case username

// Data Type (  Primitive  |  Non Primitive (Reference)   )
//             Number , string || object , Array ,
// boolean , undefined , null  || function , Date
//  symbol , Bigint            || RegExp

// arithmetic operator , + , *, - , / , ** , ++ , -- , +3
// comparison operator , && , || , == , === , != , !== , <= , =>

// looping (for , while , do while , for each ,for of , for in, map, filter , reduce , some, find, find index)

// for(var x = 1 ; x < 6 ; x++){
//     console.log("hello" , x);
// }



var user = document.getElementById("userName")
var display = document.getElementById("demo")
var msgError = document.getElementById("msgError")

function massage() {
    var regex = /^[A-Z][a-z]{2,8}$/;

    if (regex.test(user.value) == true) {
        // display msg
        display.innerText = "Hello " + user.value
       
        user.classList.add("is-valid")
        user.classList.remove("is-invalid")
        msgError.classList.remove("d-block")
    }else{
        // error
        user.classList.add("is-invalid")
        msgError.classList.add("d-block")
    }
}







// let age = 20
// let age = "ali"

// global scope || local scope

// global
// var y = 20;

// if(true){
//     // local
//     let x = 10;
// }

//  console.log(x);





// function welcome(){
//     // local
//     var x = 30
// }

// console.log(x);


// let x = 10;
// x = "ahmed";
// console.log(x);





// hosting
// console.log(x);
// var x = 5; // undefined
// let x = 5; // error


// function hello(userName) { 
//     console.log("welcome " + userName)
// }

// hello("ahmed")


let x = Number( window.prompt("Enter Number:") );

if(x % 2 == 0){
    console.log("even")
}else{
    console.log("odd");
}
