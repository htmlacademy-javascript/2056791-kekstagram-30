import {generatedPictures} from './gallery.js';
import { generatedObjects } from './data.js';
import { addThumbnailClickHandler } from './popap.js';

const pictures = generatedObjects();

console.log(generatedPictures());
addThumbnailClickHandler(pictures);



