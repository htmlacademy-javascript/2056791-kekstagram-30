const noRepeat = (min, max) => {
  const arrayOfNumber = [];

  return function(){
    let valueCurrent = getRandomInteger(min, max);

    while(arrayOfNumber.includes(valueCurrent)){
      valueCurrent = getRandomInteger(min, max);
    }
    arrayOfNumber.push(valueCurrent);
    return valueCurrent;
  };

};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {noRepeat, getRandomInteger};
