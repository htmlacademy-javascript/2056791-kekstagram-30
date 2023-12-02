import {getGeneratObjects} from './data.js';

const containerPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const generatePictures = getGeneratObjects();
const fragmentPictures = document.createDocumentFragment();

generatePictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes') = likes;
  pictureElement.querySelector('.picture__comments') = comments.length;
  fragmentPictures.appendChild(pictureElement);
});

const appendPictures = () => {
  containerPictures.appendChild(fragmentPictures);
};

export {appendPictures};
