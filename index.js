/*let _ = require('underscore')

let num=[1,5,8,9]
let res = _.filter(num,(element)=>{return element%2==0})
console.log(res)
*/
var o=0;
while(true){
  
var readline = require('readline-sync');
let fs=require('fs')
var redm=fs.readFileSync('./flower.txt','utf8');
var f=0;
if(o>0){
var ans=readline.question("do u want to continue..?y/n \n")
if(ans=="n"){
    console.log('ok..thank you i hope u engoy :) .. bay \n')
    break;
    
}
}

var number = readline.question("welcome ;) \nchoose the number of op u need to preform :? \n 1-count the number of rows \n 2-list the flower name that start with letter 'S' \n 3-count the number of flowers that not start with letter 'S'\n 4-list the flower start with your first name \n 5- print name of flower with length 5\n ");
o++;
if(number==1){
    var i;
    console.log("number of rows is : ")
    var stringArray = redm.split('\n')
   console.log(stringArray.length)
    
}
if(number==2){

var stringArray = redm.split('\n')
console.log('Word begain  with letter "S" is: ')
for(var i=0; i<stringArray.length; i++){
let word = stringArray[i];
if(word.startsWith('S')) {
 console.log(word)
}
}
}
if(number==3){
    var c=0;
var stringArray = redm.split('\n')
console.log(' number of Words  not begain  with letter "S" is: ')
for(var i=0; i<stringArray.length; i++){
let word = stringArray[i];
if(!word.startsWith('S')) {
    c++;
    //console.log(word)

 
}
}
console.log(c)
}
if(number==4){
  var stringArray = redm.split('\n')
  console.log('Word begain with my first letter "n" is  : ')
for(var i=0; i<stringArray.length; i++){
let word = stringArray[i];
    if(word.toLowerCase().startsWith('n')) {
       console.log(word)
    }
}
}
if(number==5){
var stringArray = redm.split('\n')
console.log('Word with length 5: ')
for(var i=0; i<stringArray.length; i++){
let word = stringArray[i];
if(word.length==5){

  console.log(word )
}
}


}
  

}

