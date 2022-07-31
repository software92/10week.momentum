const images = [
  'https://cdn.pixabay.com/photo/2015/09/13/05/58/lighthouse-937738_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__340.jpg',
  'https://cdn.pixabay.com/photo/2016/02/14/09/45/diamond-1199183_960_720.jpg',
];

const body = document.querySelector('body');
const background = document.createElement('img');

const selectImage = () => {
  const randomNumber = Math.floor(Math.random() * images.length);

  return images[randomNumber];
};

background.src = selectImage();

body.appendChild(background);
