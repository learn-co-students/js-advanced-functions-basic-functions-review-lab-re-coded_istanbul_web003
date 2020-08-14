// Your code here
function saturdayFun(toFun = "roller-skate"){
    return `This Saturday, I want to ${toFun}!`
}
function mondayWork(toWork = "go to the office"){
    return `This Monday, I will ${toWork}.`
}
function wrapAdjective(str="*") {
    return function(str2= "special") {
        return `You are ${str}${str2}${str}!`
    }
}
let Calculator = {
    add: function(x="1", y="3"){
        return x+y;
    },
    subtract: function(x="1", y="3"){
        return x-y;
    },
    multiply: function(x="1", y="3"){
        return x*y;
    },
    divide: function(x="10", y="5"){
        return x/y;
    } 
}
function actionApplyer(integerNumber, arrayOfFunctions){
        if(arrayOfFunctions.length === 0){
            return integerNumber;
        } 
        else {
            integerNumber = integerNumber*2;
            integerNumber = integerNumber+1000;
            integerNumber = integerNumber%7;
            return integerNumber
        }   

}

