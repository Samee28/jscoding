"use strict";//treat all js code as  newer version
//alert(3+3) //we are using node js not browser
//coderealibity shuld be most prioprity
console.log("samee");

let name="hitesh";
let age=24;
let isloggedin=false;
let state;


//number=>2 to power  53
//bigint//for big values

//string=""
//boolean=true/false
//null=>standalone   value
//undefined=>nalue not defined
    //symbol=>for unique find

    //object


    console.log(typeof null);//object type hotav  nulll ka but undefined ka undefined hi hota hai


/*NUMBER CONVERSION */
let score="abc33";
console.log(typeof score);
console.log(typeof (score));
//number convert
let valueinnum=Number(score);
console.log(typeof valueinnum);
console.log(valueinnum);

/*note:-
"33"=>33
"33abc"=NaN
true=>1; false=0;
*/
//for boolean
let  islogged="";

let booleanconvert=Boolean(islogged);
console.log(booleanconvert);

//when using
/* empty string=""  =converter boolean is false
 1=> true  0=>false
 samee=true
 */


 let  somenum=33;

let Stringconvert=String(somenum);
console.log(Stringconvert);
console.log(typeof Stringconvert);


/*--------operation----------*/


//all arthematic operation
let str1="hello";
let str2=" samee";
let str3=str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

console.log(+true);
console.log(+"");

//++pre and  pos++ 
//comparsion  opertaor 
// console.log("2">1);//both are diff datatype
// console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined<0);

console.log("2"===2);//strict karta ha do not compare dif data type check karta same datatype h y nhi





