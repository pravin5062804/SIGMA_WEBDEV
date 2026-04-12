

//methods

// alert("to alert user ");
// console.log("to log something in console");
// console.warn("to warn user");
// console.error("to show error");

//types of variables declaration using keywords let const var=ES5

// var a; //global variable

// let b; //chnageable variable

// const c=30; //constant variable

// a=10;
// b=20;
// console.log(a);
// console.log(b);
// console.log(c);


//data types in js
//primititive data types
//string
// let naam="pravin";
// console.log(naam);

//num
//  let num=30;
//  console.log(num);

//bolean
// let istrue=true;
// console.log(istrue);
//

//undefined
// let a;
// console.log(a);

//null
// let a=null;
// console.log(a);  


//operators in js
//arithmetic operators
//  let a=11;
//  let b=5;
 
//  console.log(a+b);//addition operator
//  console.log(a-b);//division operator
//  console.log(a*b);//multiplication operator
//  console.log(a/b);//quotient operator
//  console.log(a%b); //remainder operator 

//comparison operators
//  let a=10;
//  let b=20;
//  console.log(a===b); //equal to operator
//  console.log(a!=b); //not equal to operator
//  console.log(a>b); //greater than operator
//  console.log(a<b); //less than operator
//  console.log(a>=b); //greater than or equal to operator
//  console.log(a<=b); //less than or equal to operator


//main thigs in js
//  let a=10;
//  let b="hell";
 
//  console.log(a*b);//NAN not a number
//  console.log(a+b);//add operation and concatenation operation
//  console.log(a-b);//NAN
//   console.log(a%b);//NAN
//  console.log(a===b);//false

//logical operators
//  let a=10;
//  let b=20;
//  console.log(a>5 && b>15); //logical and operator AND
//  console.log(a>5 || b>25); //logical or operator OR
//  console.log(!(a>5)); //logical not operator NOT




//non  primititive data types

//function
// function sum(a,b){
//     let c=a+b;
//     return c;
// }

// console.log(sum(10,20));

// //first class function
// let add=function(a,b){
//     return a+b;
// }

// console.log(add(10,20));

// //arrow function
// let addition=(a,b)=>{
//     return a+b;
// }   
// console.log(addition(10,20));




//arrays
//single dimensional array
// let arr=[1,2,3,4,5];
// console.log(arr);

//multi dimensional array
// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr);

//array of objects
// let arr=[{naam:"k"},{naam:"a"},{naam:"h"},{naam:"Pravin"}]
// console.log(arr[0].naam);


//object
// let obj=
// {
//     naam:"Pravin",
//     age:19,
//     salary:25000
// }

// console.log("Tumhara naam hai=",obj.naam)

//object of functions
// let obj={
//     naam:"Pravin",
//     age:19,
//     fun1:function(a){
//         console.log("Welcome:",a);
//        return "Chal ab shopping kar"
//     }
// }
// console.log(obj.fun1("Kuddii"));

//loops
//while
// let a = 5;
// while (a < 10) {
//     console.log("hello");
//     a++;
// }


//dowhile

// let b =11;
// {
//     console.log("hello");
//     b++;
// }dowhile(b < 10);


//forEach

// let arr=[1,2,3,4,5]
// arr.forEach(function(valueaayegi){
//     console.log(valueaayegi);
// })


//for loop
// for(let a=5;a<10;a++){
//     console.log("hello",a)
// }


//conditional statement in js
//if else
// if(age>=18){
//     console.log("Kar sakte ho bahiya vote");
// }else{
//     console.log("jaake ke dudh pii beta");
// }

//else if 
//aata hai

//nested if else 
    // if(){
    //     if(){

    //     }else{
            
    //     }
    // }else{
    //     if(){

    //     }else{

    //     }
    // }


 

//DOM
//document object model

//selection of element
//chaning html
//changing css
//add event listreners element

// const h1=document.querySelector("h1"); //selection
// console.log(h1);

// h1.addEventListener("click",function(){ //event performed 
// h1.innerHTML="Chalo ISKON";// changing html
// h1.style.color="lightgreen";//cahnging css
// h1.style.backgroundColor="white"
// })
// h1.addEventListener("dblclick",function(){
//     h1.innerHTML="Hello guyys";
// h1.style.color="white";
// h1.style.backgroundColor="black"
// })