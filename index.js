// Your code here

/* function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to ´${activity}´!"
} */

function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to "+ activity +"!"
}

let mondayWork = function(activity="go to the office") {
    return "This Monday, I will "+ activity +"."
}

function wrapAdjective(myAdj = "*") {
    return function(myParam = "special") {
        //let encouragingPromptFunction = wrapAdjective("!!!")
        return "You are "+ myAdj + myParam + myAdj +"!"
    }
}

let Calculator = {
    add(a, b) {
    return a+b
},
    subtract(a, b) {
    return a-b
},
    multiply(a, b) {
    return a*b
},
    divide(a, b) {
    return a/b
    }
}

function actionApplyer(integer, array) {
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
    return integer
}