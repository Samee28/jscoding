//singleton:=constructor se jo banta ha bo singleton hota ha' object literal se nhi
//|->object.create();

//object literals

const mysym=Symbol("key1");//symbol as a key use  karna ha toh
 const jsuser={
      name:"samee",
      "full name":"samee rai",
      [mysym]:"muiname",//symbol ko key ki tarah use karna ho to square []ka use karke kyuki without sq bracket string ki tarah use      age:23,
      location:"bhopal",
      email:"samee.@gmail",
      isloggedin:false,
      logindays :["monday","tuesdayy"]
 }
 //ways to access tje obj

//  console.log(jsuser.name);//in this you cant access string  eg full name

//  console.log(jsuser["name"]);//in this you access that
//  console.log(jsuser["full name"])//use  this on this context

//  //symbol way
//  console.log(jsuser[mysym]);

//  jsuser.email="sam@gmail";//for chage key 
//  //Object.freeze(jsuser);//freeze kar deta  further no change

// jsuser.greeting=function(){
//      console.log("hello user....");
// }
// console.log(jsuser.greeting);//without using fun [Function (anonymous)]
// console.log(jsuser.greeting());//hello user....


// jsuser.greeting2=function(){
//      console.log(`hello user....,${this.name}`);
// }
// //console.log(jsuser.greeting);//without using fun [Function (anonymous)]
// console.log(jsuser.greeting2());



//object singleton
//const tinderu= new Object();//{}
const tinderu={};  //{}   emptyobject
tinderu.id=122;
tinderu.name="sammy";
tinderu.isloggedin=false;
//console.log(tinderu);

const ruser={
     email:"sam@gmail.com",
     fullname:{
          userfullname:{
             firstname:"sam",
             lastname:"rai",  
          }
     }
}
//console.log(ruser.fullname.userfullname);

console.log(Object.keys(tinderu));// keys object kiarray data type formaty m
console.log(Object.values(tinderu));//only valuss
console.log(Object.entries(tinderu));//key and valus ek stah
console.log(tinderu.hasOwnProperty('name'));//for finding  ha ya nhi  

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3=Object.assign({},obj1,obj2);//for combijnne both obj{} ye eslilya esi m target sare obj esi m jaye
//const obj3=Object.assign({},obj1,obj2);
//simple way

const obj3={...obj1,...obj2}
console.log(obj3);


