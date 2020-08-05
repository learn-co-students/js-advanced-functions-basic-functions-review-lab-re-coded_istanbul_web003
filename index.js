// Your code here
function saturdayFun(target="roller-skate") {
    return `This Saturday, I want to ${target}!`;
  }
  saturdayFun(); 
  saturdayFun("Methuselah");


  function mondayWork(target="go to the office"){
    return `This Monday, I will ${target}.`
  }


  function wrapAdjective(string="*") {
    return function(adjective="special") {
         return `You are ${string}${adjective}${string}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!");
encouragingPromptFunction();

wrapAdjective("%")("a dedicated programmer");


const Calculator={
    add : (a,b)=> a+b,
    subtract:(a,b)=> a-b,
    multiply : (a,b)=> a*b,
    divide : (a,b)=> a/b,
}


const arrayOfTransforms = (number)=>
    {((number*2) + 1000) % 7};


function actionApplyer(integer, array) {
 let number = integer
 for(let i = 0; i < array.length ; i++){
    number = array[i](number)
 }
 return number;
}