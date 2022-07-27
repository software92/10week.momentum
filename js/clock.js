const clock = document.querySelector('.clock');

const nowTimes = () => {
  const today = new Date();

  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
};

nowTimes();
setInterval(nowTimes, 1000);
