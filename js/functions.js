
function timeCalculator(startTime, endTime, partyTime, voiceTime){
  let date = startTime.replace(":", "").split("").join('');
  return date;

}
console.log(timeCalculator('08:00'));



function numberRes(str){

  let succes = "" + str
  let reserch = succes.replaceAll(' ', '').split("");
  let number = '';
  for(let i = 0; i < reserch.length; i++){
    if(reserch[i] == +reserch[i]){
      number += reserch[i];
    }
  }

  return parseInt(number);
}

console.log(numberRes('2023 год'));
console.log(numberRes('ECMAScript 2022'));
console.log(numberRes('1 кефир, 0.5 батона'));
console.log(numberRes('агент 0070'));
console.log(numberRes(' я томат'));

console.log(numberRes(2023));
console.log(numberRes(-1));
console.log(numberRes(1.5));
