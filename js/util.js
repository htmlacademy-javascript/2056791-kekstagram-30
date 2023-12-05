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

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  }
}

const isEscapeKey = (evt) => evt.key === 'Escape';


const isTargetClick = (evt, select) => evt.target.closest(select);

const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();
const generateDataId = createIdGenerator();

export {
  noRepeat,
  getRandomInteger,
  isEscapeKey,
  isTargetClick,
  getRandomArrayElement,
  createIdGenerator,
  generateCommentId,
  generatePhotoId,
  generateDataId
};
