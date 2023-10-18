const checkLine = (str, length) => {
  let result = (str.length <= length) ? true : false;
  console.log(result);
  return result;
}




checkLine('проверяемая строка', 20);

checkLine('проверяемая строка', 18);

checkLine('проверяемая строка', 10);


const checkPalindrom = (str) => {
  let clearStr = str.replaceAll(' ', '').toLowerCase();
  let reverseStr = str.replaceAll(' ', '')
  .toLowerCase()
  .split('')
  .reverse()
  .join('');
  console.log(clearStr === reverseStr);
  return clearStr === reverseStr;
}


checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кексcа');
checkPalindrom('Лёша на полке клопа нашёл ');

const checkNumber = (str) => {
  const string = str.toString();
  let result = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }
  return parseInt(result, 10);
}


console.log(checkNumber('2023 год'));
console.log(checkNumber('ECMAScript 2022'));
console.log(checkNumber('1 кефир, 0.5 батона'));
console.log(checkNumber('агент 007'));
console.log(checkNumber(' я томат'));
console.log(checkNumber(2023));
console.log(checkNumber(-1));
console.log(checkNumber(1.5));


function lengthCheck(str, length){
  const SUCCES = true;
  const NOTSUCCES = false;

  const accesString = (str.length < length || str.length === length) ? SUCCES : NOTSUCCES;
  return accesString;
}
//`Проверка прошла: ${str}, символов ${length}`
//`Проверка не прошла ${str}, строка длиннее чем указано ${length}`
lengthCheck('проверяемая строка', 20);

lengthCheck('проверяемая строка', 18);

lengthCheck('проверяемая строка', 10);

// Палиндром
function isPadindrom(str){
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');

  const reversedStr = cleanedStr.split('').reverse().join('');

  const result = cleanedStr === reversedStr;

  return result;
}

isPadindrom('топот');
isPadindrom('ДовОд');
isPadindrom('Кексcа');
isPadindrom('Лёша на полке клопа нашёл ');


function numberRes(str){

  const succes = str;
  const reserch = String(succes).replaceAll(' ', '').split('');
  let number = '';
  for(let i = 0; i < reserch.length; i++){
    if(reserch[i] == +reserch[i]){
      number += reserch[i];
    }
  }

  return parseInt(number, 10);
}

numberRes('2023 год');
numberRes('ECMAScript 2022');
numberRes('1 кефир, 0.5 батона');
numberRes('агент 007');
numberRes(' я томат');
numberRes(2023);
numberRes(-1);
numberRes(1.5);
