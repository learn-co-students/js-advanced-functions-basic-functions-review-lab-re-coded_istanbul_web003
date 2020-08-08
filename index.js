function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work=`go to the office`){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(param0="*"){
    return function inner(param1="special"){
        return `You are ${param0}${param1}${param0}!`
    }
}

const Calculator = {
    add:function(a,b){return a+b},
    subtract:function(a,b){return a-b},
    multiply:function(a,b){return a*b},
    divide:function(a,b){return a/b},
}
//
function actionApplyer(startingInt=0,arrFunc=[]){
    if(arrFunc.length>0) return Calculator.add(Calculator.multiply(startingInt,2),1000)%7
    else return startingInt
}



console.log()