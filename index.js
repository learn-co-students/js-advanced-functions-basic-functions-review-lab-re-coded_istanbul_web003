function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return function (adj="special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`;
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
    add: function(x,y) {
        return x + y;
    },
    subtract: function(x,y) {
        return x - y;
    },
    multiply: function(x,y) {
        return x * y;
    },
    divide: function(x,y) {
        return x / y;
    }
}

function actionApplyer(num, funcArr) {
    let result = num;
    for (func of funcArr) {
        result = func(result);
    }

    return result;
}

let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"


let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ];

console.log(actionApplyer(13, arrayOfTransforms));