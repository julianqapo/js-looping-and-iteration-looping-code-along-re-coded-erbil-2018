// Code your solutions in this file
/*
function printBadges(sms){
  for (i of sms){
    console.log(`Welcome ${i} You are employee #${i+1}.`)
  }
}
*/
let sms = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(sms){
  for (i = 0; i<sms.length; i++){
    console.log(`Welcome ${sms[i]}! You are employee #${i+1}.`)}
    return sms
}


function tailsNeverFails(){
let x = 0
  while (Math.random() >= 0.5){
  x++}
  return "You got "+ x +" tails in a row!"
  }
