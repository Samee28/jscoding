  const score=400;
  console.log(score);
  let num= new Number(100);//spercily show karta ha ki number ha like [Number: 100]
 // console.log(num);


  //console.log(num.toString().length);//string m convert karta the n length
  // console.log(num.toFixed(2));//fixed karta ha deccima;lmvalue ko


  const  nextnum=124.8989;
 // console.log(nextnum.toPrecision(3));//toPrecision(precision?: number): string
//@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const hun=1000000;


//console.log(hun.toLocaleString('en-IN'));//acood to indian 10,00,000   >>bydefault us standard ka base p

/*******MATHS****** */
// console.log(Math);
// console.log(Math.abs(-1));//absolute value give positive value
// console.log(Math.round(50.5));//round of value give
// console.log(Math.ceil(4.2));//upper value hi choice  esko 5 kar dega
// console.log(Math.floor(4.2));//lower value take means 4


//min() =for minimum value  max()=for max valiue
// console.log(Math.random());
// console.log((Math.random()*10)+1);//random value 1 se to upper hi ayegi bcz be add one on that
// console.log(Math.floor(Math.random()*10)+1);//value roundoff


// const min=10;
// const max=20;
// console.log(Math.floor(Math.random()*(max-min+1)));
// console.log(Math.floor(Math.random()*(max-min+1))+min);



/*----------date and time---------*/

// const d= new  Date();//date ka tyep object ha
//  console.log(d.toString());//Fri Jul 05 2024 04:25:54 GMT+0000 (Coordinated Universal Time)
//  console.log(d.toDateString());//Fri Jul 05 2024
//  console.log(d.toLocaleString());//7/5/2024, 4:30:25 AM

//  console.log(typeof d);//datat type object hota ha

// let created=new Date(2024 ,0,2);
// let created=new Date(2024 ,0,2,5,33,59);
// let created=new Date("2024-01-7");//1/7/2024, 12:00:00 AM

let created=new Date("01-22-2024");
// console.log(created.toString());//Tue Jan 02 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// console.log(created.toDateString());//Tue Jan 02 2024


//console.log(created.toLocaleString());//1/2/2024, 5:33:59 AM

let mytime=Date.now();
//console.log(mytime);//1720154481207
//console.log(created.getTime());//this helping to compare date
console.log(Math.floor(Date.now()/1000));//this valuer goive in sec  for not want dec value be magth.floor

let newd=new Date();
// console.log(newd);
// console.log(newd.getMonth()+1);
// console.log(newd.getDay());

// console.log(`This is month${newd.getMonth()+1} and day${newd.getDate()}`);

//local string( )  very useful within we declare obj

console.log(newd.toLocaleString('default',{ 
weekday:"long",

}));//here we create the ccustom date