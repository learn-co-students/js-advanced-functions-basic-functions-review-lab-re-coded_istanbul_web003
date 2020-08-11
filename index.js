// Your code here
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
    add : function() {
       return 1 + 3
    },
    subtract : function() {
        return 1 - 3
    },
    multiply : function() {
        return 1 * 3
    },
    divide : function() {
        return 10 / 5
    }

}

 function actionApplyer(startingInt, arrayOfFunctions) {
     for (const fn of arrayOfFunctions) {
        startingInt = fn(startingInt)
     }
     return startingInt
 }