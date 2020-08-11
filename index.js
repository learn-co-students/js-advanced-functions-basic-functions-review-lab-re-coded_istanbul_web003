// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(whereTogo = "go to the office") {
    return `This Monday, I will ${whereTogo}.`
};


function wrapAdjective(string = '*') {
    return function (adj = "special") {
        return `You are ${string}${adj}${string}!`
    }
};

let Calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    },
};


function actionApplyer(num, array) {
    if (array.length > 0) {
        const one = array[0](num);
        const two = array[1](one);
        const three = array[2](two);

        return three;
    }

    else {
        return num;
    }



}