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

var user = document.getElementById("userName");
var display = document.getElementById("demo");
var msgError = document.getElementById("msgError");

// this -> arrow
let massage = () => {
  var regex = /^[A-Z][a-z]{2,8}$/;

  if (regex.test(user.value) == true) {
    // display msg
    display.innerText = "Hello " + user.value;

    user.classList.add("is-valid");
    user.classList.remove("is-invalid");
    msgError.classList.remove("d-block");
  } else {
    // error
    user.classList.add("is-invalid");
    msgError.classList.add("d-block");
  }
};

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

// let x = Number( window.prompt("Enter Number:") );

// if(x % 2 == 0){
//     console.log("even")
// }else{
//     console.log("odd");
// }

// let a = 1 , b = 2
// let nums = [5 , 2 , 7]
// console.log( Math.max(...nums) );






// 1- function Declaration
function welcome(userName , age) {
  // console.log(`hello`, userName , "age" , age);
  console.log(  `hello ${userName} age ${age}` )
}
// welcome("ahmed" , 20);




// arrow function
// let hello = name => "welcome " + name

// console.log(  hello("ali") );

// function welcome(num1 , num2) {
//     return Number(num1) + Number(num2) // 35
// }

// console.log( welcome(15 , "ali") );

// 2- function expression
// let greet = function(name){
//     console.log("hello",name)
// }

// 3- Anonymous function (callback function)
// setTimeout( function() { console.log("hello") }  , 1000 )

// type of parameters -> named parameters , default parameters

// array
// let age1 = 15;
// let age2 = 17;
// let age3 = 20;
// let age4 = 22;
// let age5 = 25;
// console.log( age3 )

// index :  0    1    2     3    4
// let ages = [15 , 17 , 20 , 22 , 25]

// ages.push(30)
// ages.pop()
// ages.unshift(30)
// ages.shift()
// splice , slice
// console.log( ages.length );
// console.log(  ages.includes(20)   );

// console.log("old" , ages);
// ages.splice(1, 0 ,40)

// console.log( "slice: " , ages.slice(1,3) );

// console.log("new" , ages);

// console.log([]  == []); //

// console.log(["1","2","3"]  == ["1","2","3"]); //
// console.log( ["1","2","3"]  === ["1","2","3"] ); //

// console.log([1,2,3]  == [1,2,3]); // false

// let arr1 = [1,2,3];
// let arr2 = [...arr1]

// arr2.push(7)

// console.log("array 1: " ,arr1);

// console.log("array 2: " ,arr2);

// console.log(arr1 == arr2); // true

// console.log( JSON.stringify([1,2,3]) == JSON.stringify([1,2,3]) ); // true

// for( let i = 0 ;  i < 5   ; i++ ){
//     console.log( ages[i] )
// }

// console.log( ages[0] )
// console.log( ages[1] )
// console.log( ages[2] )
// console.log( ages[3] )
// console.log( ages[4] )

// Object {}

let name1 = "ahmed";
let age1 = 20;
let email1 = "ahmed@gmail.com";

// console.log( email1 );

// let user1 = { name : "Ahmed" , age : 20 , email : "ahmed@gmail.com"  };

// let {name} = user1;

// console.log(user1.name);

// console.log( user1.email  ); // dot notation
// console.log(  user1["email"] ); // bracket notation

// user1.name = "mohamed"; // edit
// user1["phone"] = "01245747444"; // add

// delete user1.age // delete

// console.log(  user1 );

// console.log(    {}  == {} ); // false
// console.log(    {name : "ali" , age : 10}  == {name : "ali" , age : 10} ); // false

// let user3 = {
//   name : "mohamed",
//   age : 30,
//   email : "mohamed@gmail.com",
//   phone : "01023555445",
//   family : {
//     FMname: "ali" ,
//     FMMember : 25 ,
//     family2 : {
//       FMname2 : "ahmed"
//     }
//   }
// }

// let {FMname2} = user3.family.family2

// console.log(FMname2);

// console.log(  user3.family.family2.FMname2 );

let users = [
  { name: "may", age: 10, email: "ahmed@gmail.com" },
  { name: "Ahmed", age: 20, email: "ahmed@gmail.com" },
  { name: "ali", age: 20, email: "ahmed@gmail.com" },
  { name: "mohamed", age: 5, email: "ahmed@gmail.com" },
  { name: "aya", age: 20, email: "ahmed@gmail.com" },
];

// console.log( users[6]?.name ?? "hellllo" );


// users.sort( (a,b)=>{
//   return a.age - b.age
// } )

// console.log("new" , users);


// users.forEach(  function(person , i){
//   console.log(person.name , i);
// } );



// API -> Application Programming Interface

// for (let ind = 0; ind < users.length; ind++) {
//   console.log(users[ind].name, users[ind].age);
// }

// console.log( users[2]["name"] );

// let user1 = { name : "Ahmed" , age : 20 , email : "ahmed@gmail.com"  };
// let user2 = { name : "ali" , age : 20 , email : "ahmed@gmail.com"  };
// let user3 = { name : "aya" , age : 20 , email : "ahmed@gmail.com"  };
// let user4 = { name : "mohamed" , age : 20 , email : "ahmed@gmail.com"  };
// let user5 = { name : "may" , age : 20 , email : "ahmed@gmail.com"  };




// storage
/***
 * 1- local storage   5-10MB  | not delete
 * 2- session storage 5-10MB  | delete (Tab , browser)
 * 3- cookies storage 4KB     | delete time
 * 4- cash storage    >100MB  | not delete
 */


// localStorage.setItem("hello" , "welcome")
// console.log(  localStorage.getItem("hello")   ); // null
// console.log(localStorage.key(1));
// console.log(   localStorage.length  );
// console.log( localStorage.removeItem("dddddddddddddd") ); // undefined
// localStorage.clear()



/**
 * 
 * @param {number 1} number 1 - الرقم الاول
 * @param {number 2} number 2 - الرقم الثاني
 * @returns {numbers} ناتج الجمع
 */
function sum(num1 , num2) { 
    return num1 + num2
}


// sum()



// CURDS 
/**
 * C -> create
 * U -> update
 * R -> Read
 * D -> Delete
 * S -> Search
 */
// TO-Do List


// let age = 25

// age > 20 ? console.log("yes") : console.log("no");

// if(  age > 20){
//   console.log("yes");
// }else{
//   console.log("no");
// }
