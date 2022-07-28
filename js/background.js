const images = [
  'https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458__340.jpg',
  'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009__340.jpg',
  'https://cdn.pixabay.com/photo/2017/03/05/21/43/planet-2120004__340.jpg',
];

const body = document.querySelector('body');
const background = document.createElement('img');

const selectImage = () => {
  const randomNumber = Math.floor(Math.random() * images.length);

  return images[randomNumber];
};

background.src = selectImage();

body.appendChild(background);
