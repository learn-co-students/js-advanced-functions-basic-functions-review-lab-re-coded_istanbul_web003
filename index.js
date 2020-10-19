function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(outerParam = "*") {
    return function(param = "special") {
        return `You are ${outerParam}${param}${outerParam}!`
    }
}

const Calculator = {
    add : () => 1 + 3,
    subtract : () => 1 - 3,
    multiply : () => 1 * 3,
    divide : () => 10 / 5
}

 function actionApplyer(startingInt, arrayOfFunctions) {
     for (const fn of arrayOfFunctions) {
        startingInt = fn(startingInt)
     }
     return startingInt
 } 
