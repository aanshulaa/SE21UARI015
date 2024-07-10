//console.log("Hello World!!!", "Anshula", 21, "Btech ai");

// let a = 90;
// let b = "anshu";
// let c = true;
// let d = undefined;
// let e = null;
// let f =  BigInt(3456789876543);
// let g = Symbol("Hello");

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

//objects
// let person = {
//     firstName: 'Anshula',
//     lastname: 'Killamsetty',
//     age: 21,
//     isMarried: false
// };
// person.age = 27
// console.log(person.age);

//arithematic operators
// let a = 2+3;
// let b = 7-5;
// let c = 8/2;
// let d = 2*6;
// let e = 2**3;
// let f = 8%2;
// console.log(a,b,c,d,e,f);

//Assignment operators
// let x=10;
// x+=9;
// x-=2;
// x/=4;
// x%=8;
// x*=5;
// x**=4;
// console.log(x);

//comparision operators
// console.log(3==3);
// console.log(3=3);
// console.log(3<3);
// console.log(3>3);
// console.log(3<=3);
// console.log(3>=3);
// console.log(3===3);


// == (equality operator) , === (stricty equality operator)
// console.log(3==3);
// console.log(3===3);

//logical operators
// and, or, not
// console.log(3==3 || 4>5);
// console.log(3==3 && 4<5);
// console.log(!true);

//implicit type conversion :- type coerction
// console.log(35+"hello");
// console.log(34=="34")

//explicit type conversion :- type coerction
// let a = 10;
// let s = (a);
// console.log(typeof s);


//if else
// let grocerySpending = 600;

// if(grocerySpending > 1000){
//     let discount = 0.10 * grocerySpending;
//     console.log("You get a 10% discount ", discount);
// }else if(grocerySpending > 500){
//     let discount = 0.05 * grocerySpending;
//     console.log("You get a 5% discount ", discount);
// }else{
//     console.log("No discount for you");
// }

//switch statement
// let shippingOption = "One-Day";

// switch(shippingOption){
//     case "Standard":
//         console.log("Your package will be delivered in 3-5 business days");
//         break;
//     case "One-Day":
//         console.log("Your order will be delivered within one day");
//         break;
//     case "Premium":
//         console.log("Your order will be delivered within 2-3 days");
//         break;
//     default:
//         console.log("Shipping option is invalid");
// }

// let sum = 0;
// let items = [10,20,30,40,50,60,70];
// let i = 0;
// while(i < items.length){
//     sum += items[i];
//     i++;
// }
// console.log(sum); 

//FUNCTIONS
// function printname(){
//     console.log("Anshula");
// }

// printname();

//scoping
// let a = 10;
// function sum(){
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }
// if(true){
//     let c = 30;
//     console.log(a);
//     console.log(c);
//     sum();
// }
// sum()
// //console.log(c);
// console.log(a);
// //console.log(b);

//scoping chain
var a = 30
function outer(){
    var c = 10;
    function inner(){
        var e = 20;
        console.log(c,e,a);
    }
    inner();
}
outer();



