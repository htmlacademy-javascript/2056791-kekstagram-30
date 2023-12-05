import {getRandomInteger, noRepeat,}
 from './util.js';

const DESKRIPTON_PHOTO = [
  'По синему морю, к зеленой земле',
  'Плыву я на белом своем корабле.',
  'На белом своем корабле,',
  'На белом своем корабле.',
  'Меня не пугают ни волны, ни ветер,',
  'Плыву я к единственной маме на свете.',
  'Плыву я сквозь волны и ветер',
  'К единственной маме на свете.',
  'Плыву я сквозь волны и ветер',
  'К единственной маме на свете.',
  'Скорей до земли я добраться хочу,',
  'Я здесь, я приехал!,- я ей закричу.',
  'Я маме своей закричу,',
  'Я маме своей закричу...',
  'Пусть мама услышит,',
  'Пусть мама придет,',
  'Пусть мама меня непременно найдет!',
  'Ведь так не бывает на свете,',
  'Чтоб были потеряны дети.',
  'Ведь так не бывает на свете,',
  'Чтоб были потеряны дети.',
  'Пусть мама услышит,',
  'Пусть мама придет,',
  'Пусть мама меня непременно найдет!',
  'Ведь так не бывает на свете,',
  'Чтоб были потеряны дети.',
  'Ведь так не бывает на свете,',
  'Чтоб были потеряны дети!',
];

const COAT_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофиссионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Лёша',
  'Алексей',
  'Иван',
  'Горыныч',
  'Дзюба',
  'Шерлок',
  'Индиан',
  'Ланоэль',
  'Джон',
  'Линкольн',
  'Джинс'
];

const ARRAY_COUNT = 25;

const ID_COUNT = {
  min: 1,
  max: 500
};

const AVATAR_COUNT = {
  min: 1,
  max: 6
};

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  min: 0,
  max: 30,
};



const newComment = (value) =>{
  const ArrayComments = [];

  while(value){
    const ArrayComment = {
      id: createIdComments(),
      avatar: `img/avatar-${getRandomInteger(AVATAR_COUNT.min, AVATAR_COUNT.max)}.svg`,
      message: COAT_COMMENTS[getRandomInteger(0, COAT_COMMENTS.length - 1)],
      name: NAME[getRandomInteger(0, NAME.length - 1)],
    };
    value--;

    ArrayComments.push(ArrayComment);
  }
  return ArrayComments;
};


const createIdComments = noRepeat(ID_COUNT.min, ID_COUNT.max);
const createIdArray = noRepeat(1, ARRAY_COUNT);
const createUrlObject = noRepeat(1, ARRAY_COUNT);
const createDescriptionObject = () => getRandomInteger(0, DESKRIPTON_PHOTO.length - 1);
const createLikesObject = () => getRandomInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX);


const createArray = () => ({
  id: createIdArray(),
  url: `photos/${createUrlObject()}.jpg`,
  description: DESKRIPTON_PHOTO[createDescriptionObject()],
  likes: createLikesObject(),
  comments: newComment(getRandomInteger(COMMENTS_COUNT.min, COMMENTS_COUNT.max)),
});

const generatedObjects = () => Array.from({length: ARRAY_COUNT}, (createArray));

export {generatedObjects};
