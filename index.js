// Your code here
function saturdayFun(param="roller-skate") {
    return `This Saturday, I want to ${param}!` 
    
}
function mondayWork(param="go to the office") {
    return `This Monday, I will ${param}.`
    
}
function wrapAdjective(flair="*") {
    return function(param="special"){
        return `You are ${flair}${param}${flair}!`

    }    
}
const Calculator = {add: function(n1,n2){return n1 + n2},
    subtract: function(n1,n2) {return n1 - n2},
    multiply: function(n1,n2) {return n1 * n2},
    divide: function (n1,n2) {return n1 / n2}
};
function actionApplyer(a, array){
    if(array.length === 0){
        return a
    }
    //let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
    let res1 = array[0](a);
    let res2 = array[1](res1);
    return array[2](res2);
}
