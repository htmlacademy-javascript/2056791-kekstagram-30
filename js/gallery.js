import {generatedObjects} from './data.js';
const containerPicture = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const pictures = generatedObjects();
const listFragment = document.createDocumentFragment();
const generatedPictures = () => {
  pictures.forEach(({url, description, likes, comments}) => {
    const picturesElement = templatePicture.cloneNode(true);
    picturesElement.querySelector('.picture__img').src = url;
    picturesElement.querySelector('.picture__img').alt = description;

    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments.length;

    console.log(picturesElement);
    listFragment.appendChild(picturesElement);
  });
};
containerPicture.append(listFragment);

export {generatedPictures};
