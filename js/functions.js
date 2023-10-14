function lengthCheck(str, length){
  const SUCCES = true;
  const NOTSUCCES = false;

  const accesString = (str.length < length || str.length === length) ? SUCCES : NOTSUCCES;
  return accesString;
}
 //`Проверка прошла: ${str}, символов ${length}`
 //`Проверка не прошла ${str}, строка длиннее чем указано ${length}`
console.log(lengthCheck('проверяемая строка', 20));

console.log(lengthCheck('проверяемая строка', 18));

console.log(lengthCheck('проверяемая строка', 10));

// Палиндром
function isPadindrom(str){
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');

  const reversedStr = cleanedStr.split('').reverse().join('');

  let result = (cleanedStr == reversedStr) ? true : false;

  return result;
}

console.log(isPadindrom('топот'));
console.log(isPadindrom('ДовОд'));
console.log(isPadindrom('Кексcа'));
console.log(isPadindrom('Лёша на полке клопа нашёл '));


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
console.log(numberRes('агент 007'));
console.log(numberRes(' я томат'));

console.log(numberRes(2023));
console.log(numberRes(-1));
console.log(numberRes(1.5));
