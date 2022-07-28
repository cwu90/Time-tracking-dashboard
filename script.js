'strict';

import database from './data.json' assert { type: 'json' };
console.log(database);

const currentAmount = document.querySelectorAll('.current');
const previousAmount = document.querySelectorAll('.previous');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});

daily.addEventListener('click', function () {
  for (let i = 0; i < currentAmount.length; i++) {
    currentAmount[i].innerHTML = `${database[i].timeframes.daily.current}hr`;
    previousAmount[
      i
    ].innerHTML = `Yesterday - ${database[i].timeframes.daily.previous}hr`;
  }
});

weekly.addEventListener('click', function () {
  for (let i = 0; i < currentAmount.length; i++) {
    currentAmount[i].innerHTML = `${database[i].timeframes.weekly.current}hr`;
    previousAmount[
      i
    ].innerHTML = `Last Week - ${database[i].timeframes.weekly.previous}hr`;
  }
});

monthly.addEventListener('click', function () {
  for (let i = 0; i < currentAmount.length; i++) {
    currentAmount[i].innerHTML = `${database[i].timeframes.monthly.current}hr`;
    previousAmount[
      i
    ].innerHTML = `Last Month - ${database[i].timeframes.monthly.previous}hr`;
  }
});
