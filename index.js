// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
 
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(star="*") {
    return function (cio="special") {
            return `You are ${star}${cio}${star}!`; 
    }
}

wrapAdjective();

let Calculator = {
   add: function(x,y){
        return x+y;
   },
   subtract: function(x,y){
       return x-y;
   },
   multiply: function(x,y){
       return x*y;
   },
   divide: function(x,y){
       return x/y;
   }
};
Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.multiply(1,3);
Calculator.divide(10,5);

function actionApplyer(num,array){
     for (let i = 0; i < array.length; i++) {
        num = array[i](num);
  }
  return num;
}
actionApplyer();