// Your code here

function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity= "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair= "*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

let enouragingPromptFunction= wrapAdjective("!!!")("a dedicated programmer")

const Calculator = {add: 
    function add(a,b){
        return a+b},
    subtract: function subtract(a,b){
        return a-b
    },
    multiply: function multiply(a,b){
        return a*b
    },
    divide: function divide(a,b){
        return a/b;
    }};

function actionApplyer(num, funcArray){
    if (funcArray.length === 0){
        return num;
    }
    else{
        for (const func of funcArray){
            num= func(num)
    }
    return num}
}
