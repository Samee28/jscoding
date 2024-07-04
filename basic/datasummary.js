//datatypes  *****1.primitive (not driectly copy) 2. non-primitive
//store &&access ka base p diff kiya ha


/*primritive---(call by value)//original nhi copy m changes karte ha
.....7types of primitive datadtypes.....
1-String
2-Number
3-Boolean
4-null
5-undefined
6-symbol
7-BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null//datatype object ayega
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

//Reference type(non-primitivee)//memory ma directly access avaliable
1-Array
2-Object
3-functions
*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//note:-JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime



/*  stack(primitive )==copy  value ka referncee milta hai  and head (non-primitive) =original value ka reference */

//eg
let namek="hitesh";
 let myname=namek;
 myname="sameee";
 console.log(namek);
 console.log(myname);


//heap eg

let  user1={
    email:"user@gmail",
    id:"123"

}

let user2=user1;
user2.email="samee@gmail";

console.log(user1.email);
 console.log(user2.email);

