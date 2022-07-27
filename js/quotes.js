const quotes = [
  {
    quote: '길은 모두에게 열려있지만 모두가 그 길을 가질 수 있는 건 아니다.',
    title: '인턴',
  },
  {
    quote: '호의가 계속되면 그게 권리인 줄 알아.',
    title: '부당거래',
  },
  {
    quote: '인생은 다시 돌아올 두 번의 기회가 없다고 생각하고 살아야 해.',
    title: '어바웃 타임',
  },

  {
    quote: '사람과 사람의 관계가 시작되는 건, 서로 다름을 인정하는 것부터이다.',
    title: '완벽한 타인',
  },
  {
    quote: '내가 좋아하는 사람이 나를 좋아해 주는 건 기적이란다.',
    title: '어린왕자',
  },
  {
    quote: '꿈은 도망가지 않아, 도망가는 것은 언제나 나 자신이야.',
    title: '짱구는 못말려',
  },
];

const message = document.querySelector('.quote');
const movie = document.querySelector('.movie');

const selectQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];
};

message.innerHTML = selectQuote().quote;
movie.innerHTML = selectQuote().title;
