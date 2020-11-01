function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork= function(work='go to the office'){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(string='*'){
    return function( adj='special'){
        return `You are ${string}${adj}${string}!`;
    } 
}

let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator={
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b}
}

function actionApplyer(startingInt, arrayOfFunctions) {
    for (const fn of arrayOfFunctions) {
       startingInt = fn(startingInt)
    }
    return startingInt
} 