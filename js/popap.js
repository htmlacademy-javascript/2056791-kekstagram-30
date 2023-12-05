import { isTargetClick, isEscapeKey } from "./util.js";

const modal = document.querySelector('.big-picture');

const thumbnails = document.querySelectorAll('.picture__img');

const containerPicture = document.querySelector('.pictures');

const imageUrl = modal.querySelector('.big-picture__img img');
const imageLikes = modal.querySelector('.likes-count');
const imageDescription = modal.querySelector('.social__caption');

const imageCommentCount = modal.querySelector('.social__comment-count');
const imageShowContent = imageCommentCount.querySelector('.social__comment-shown-count');
const imageTotalCount = imageCommentCount.querySelector('.social__comment-total-count');

const commentLoader = modal.querySelector('.comments-loader');
const buttonClose = modal.querySelector('.big-picture__cancel');
//Вставляться в блок social__comments
const commentContainer = modal.querySelector('.social__comments');

// Темплэйты

//
const templateComment = document.querySelector('#comment').content;
const template = templateComment.querySelector('.social__comment');

const fragment = document.createDocumentFragment();
//


const onCancel = (evt) => {
  if(isEscapeKey){
    evt.preventDefault();
    closeModal();
  }
}
//

const getComments = (comment) =>{
  comment.forEach(({avatar, name, message}) => {
    const commentElement = template.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    fragment.append(commentElement);
  });
  commentContainer.innerHTML = '';
  commentContainer.append(fragment);
}

const opemModal = ({url, likes, description, comments}) => {
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;

  getComments(comments);

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancel);
  buttonClose.addEventListener('click', closeModal);
  imageCommentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

function closeModal(){
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCancel);
  buttonClose.removeEventListener('click', closeModal);
  imageCommentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');

}

let chosenPicture;
const addThumbnailClickHandler = (picture) => {
  containerPicture.addEventListener('click', (evt) =>{
    const thumbnail = isTargetClick(evt, 'a');
    if(thumbnail){
      evt.preventDefault();
      chosenPicture = picture[thumbnail.dataset.pictureId - 1];
      opemModal(chosenPicture);
    }
  });
};

for(let i = 0; i < thumbnails.length; i++){
  addThumbnailClickHandler(thumbnails[i]);
}

export{addThumbnailClickHandler};

