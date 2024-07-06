//NOTE:=javascript array two types of copy banate ha shallow(original ref) and deep(copy ref)


const arr=[0,1,2,3,4,5];
const myarr=["samee","goru","aakiriti"];

const aar2=new Array(1,2,3,4,5);
//console.log(myarr[1]);

//----arrys method

// arr.push(6);
// arr.pop();
// //console.log(arr);

// arr.unshift(11);//starting  add
// arr.shift();//remove starting


//console.log(arr.includes(3));//exist karti has ya nhi array m ashow  karta ha boolean m

//console.log(arr.indexOf(3));//if not exists show -1  and exists show index


// const newarr=arr.join()//bind karke string ma convert kar deta 


// console.log(newarr);//0,1,2,3,4,5,
// console.log(typeof newarr);//string

//slice()=RETURN SECTION OF ARR  and splice() method  
// console.log("A",arr);///A [ 0, 1, 2, 3, 4, 5 ]
// const my1=arr.slice(1,3);//array ka sectional part print karta ha 


// console.log(my1);
// //[ 1, 2 ]

// console.log("B",arr);//B [ 0, 1, 2, 3, 4, 5 ] ORIGINAL KO CHANGE NHI KARTA

// const my2=arr.splice(1,3);

// console.log("c",arr);//c[0,4,5]  originL array to hi change kaer deta ha

// console.log(my2);//[ 1, 2, 3 ]


/*------*/
const hero=["salman","irronman","spiderman"];
const myhero=["sub","man","hihi"];
// hero.push(myhero);//not good way to mereg this way use concat
//  console.log(hero);

//  console.log(hero[3][1]);

const allh=hero.concat(myhero);//merge andthis maker new array  
console.log(allh);
console.log(allh[3]);

//spread  karna imp method
const allnew=[...hero,...myhero];//spread  ... yaha mere two or more array

// console.log(allnew);
// console.log(allnew[4]);

/*//flat =for solve  this typical arr to   [
  1, 2, 3, 4, 1,
  2, 7, 5, 8
] */
const otherarr=[1,2,3,4,[1,2],7,[5,8]];

const realarr=otherarr.flat(Infinity);
console.log(realarr);

//Array.from =use to convert Array
console.log(Array.isArray("samee"));//false
console.log(Array.from("samee"));//[ 's', 'a', 'm', 'e', 'e' ]

console.log(Array.from({name:"samee"}));//interesting fact : if ap batogee nhi kiska array banau like keys ya values  nhi bata payeg ato empty array dega[]asa

let s1=100;

let s2=200;

let s3=300;
console.log(Array.of(s1,s2,s3));//[ 100, 200, 300 ]


/*note
JavaScript arrays are resizable and can contain a mix of different data types\



*/



