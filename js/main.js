const DESCRIPTION_PHOTO = [
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

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофиссионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
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

let commentIDCount = 0;

const GENERATED_OBJECT = 25;

const GENERATED_LIKES = {
  MIX: 15,
  MAX: 200
};

const GENERATED_COMMENTS = {
  MIN: 0,
  MAX: 30
};

const GENERATED_AVATAR_NUMBER = {
  MIN: 1,
  MAX: 6
};

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);

    while (previousValues.includes(currentValue)){
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getComments = (quanity) => {
  const comments = [];
  let count = quanity;

  while (count){
    const comment = {
      id: commentIDCount++,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: COMMENTS_MESSAGE[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)],
      name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    };

    count--;

    comments.push(comment);
  }
  return comments;
};

const generatePicturesID = createRandomIdFromRangeGenerator(1, GENERATED_OBJECT );
const generateUrlID = createRandomIdFromRangeGenerator(1, GENERATED_OBJECT);
const generateDescriptionID = createRandomIdFromRangeGenerator(1, DESCRIPTION_PHOTO.length - 1);

const createPicture = () => ({
  id: generatePicturesID(),
  url: `photos/${generateUrlID()}.jpg`,
  description: DESCRIPTION_PHOTO[generateDescriptionID()],
  likes: getRandomNumber(GENERATED_LIKES.MIX, GENERATED_LIKES.MAX),
  comments: getComments(getRandomNumber(GENERATED_COMMENTS.MIN, GENERATED_COMMENTS.MAX)),
});

const getPictures = () => pictures = Array.from({length: GENERATED_OBJECT}, createPicture);

console.log(getPictures());
