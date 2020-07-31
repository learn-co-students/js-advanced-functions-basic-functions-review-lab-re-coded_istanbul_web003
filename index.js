// Your code here
function saturdayFun(wantDo = "roller-skate") {
    return `This Saturday, I want to ${wantDo}!` 
}

function mondayWork(willDo = "go to the office") {
    return `This Monday, I will ${willDo}.` 
}

function wrapAdjective(yy="*") {
    return function(xx = "special") {
        return `You are ${yy}${xx}${yy}!`
    }
}

const Calculator = {
    add: function(a,b) { return a + b; },
    subtract: function(a,b) { return a - b; },
    multiply: function(a,b) { return a * b; },
    divide: function(a,b) { return a / b; },   
}

function actionApplyer(x, y) {
    if(y.length === 0) {
        return x;
    } else {
        x = x*2;
        x = x+1000;
        x = x%7;
        return x;
    }


}