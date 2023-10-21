const checkLine = (str, length) => {
  let result = (str.length <= length);
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



