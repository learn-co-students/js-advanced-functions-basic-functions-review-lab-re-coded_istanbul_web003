// Your code here
function saturdayFun(act='roller-skate'){
    return (`This Saturday, I want to ${act}!`);
}
saturdayFun();

function mondayWork(act='go to the office'){
    return (`This Monday, I will ${act}.`);
}
mondayWork();

function wrapAdjective(par="*"){
    return function(where="special"){
          return`You are ${par}${where}${par}!`
        }
}

let Calculator={
    add: function(num1="1",num2="3") {
        return num1 + num2;
    },
    subtract: function(num1="1",num2="3"){
        return num1 - num2;
    },
    multiply: function(num1="1",num2="3"){
        return num1 * num2;
    },
    divide: function(num1="1",num2="3"){
        return num1 / num2;
    }
};
    
function actionApplyer(int,arr){
    let result;
    for(let i=0;i<arr.length;i++){
        result= arr[i](int);
        int = result;
    }
    if(arr.length===0){
        return int;
    }
    return result;
}