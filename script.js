

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target =
    +counter.getAttribute('data-target');

    const current =
    +counter.innerText;

    const increment =
    target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// EFEITO HEADER

window.addEventListener('scroll', () => {

  const header =
  document.querySelector('header');

  if(window.scrollY > 50){

    header.style.background =
    '#000';

  } else {

    header.style.background =
    'rgba(0,0,0,0.5)';

  }

});