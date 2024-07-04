//string concept

const name="samee";
const c=25;
console.log(name+ c+"sameee");// samee50samee

//esko string interplason bola jata hai

console.log(`hello my name is ${name} and my age is ${c}`);
 

const game=String('sammmee');//object

console.log(game[0]);//1st index
 
console.log(game.__proto__);

console.log(game.length);//7

console.log(game.toUpperCase());//SAMEE

console.log(game.charAt(2));//es index p konas achar ha

console.log(game.indexOf('e'))//kis index p e  ha
//string ki method padh lena  article se   


const  neww= game.substring(0,4);  //0se 3 tak  print honga last bale cover nhi akrta  ESMW NEG LOGE BHI TO 0 SE START KAR DEGA

console.log(neww);//samm

let  games="sankar"
const  news= games.slice(-5,4);  //esme neg value bhi le sakte hA NEG VALUE M 1 SE SATRT HOGA

console.log(news);//samm


const  newstr="    sam    ";

console.log(newstr);
console.log(newstr.trim());//space remove   work  white space character and line termination
console.log(newstr.trimEnd());

//replac


const  url="https://samee.com/hitesh%20rai";

console.log(url.replace('%20','_'));//replace karta  1st index  foe find  and second kisse karna h

console.log(url.includes('samee.'));//check karta ha ye ava ha ya nhi  true and false m ans



const gamess=String('sammmee-rai-ceo');//object

console.log(gamess.split('-'));//split array m convert karta  (-) means kis base p split karna chate ho  or ye apki string m hona chaiya tab hi hhoga  split