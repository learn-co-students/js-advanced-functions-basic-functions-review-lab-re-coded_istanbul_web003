// Your code here
function saturdayFun(act='roller-skate'){
    return (`This Saturday, I want to ${act}!`);
}
saturdayFun();

function mondayWork(act='go to the office'){
    return (`This Monday, I will ${act}.`);
}
mondayWork();

function wrapAdjective () {
    return function inner (x='special') {
        return `You are ${x}`;
    }
}