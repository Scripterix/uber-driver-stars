
const form = document.getElementById('star-form');
const fiveStar = document.getElementById('number-five');
const fourStar = document.getElementById('number-four');
const threeStar = document.getElementById('number-three');
const twoStar = document.getElementById('number-two');
const oneStar = document.getElementById('number-one');


loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addStars);
}

function addStars(e) {

  if (fiveStar.value === '') {
    alert('Add stars');
  }
  if (fourStar.value === '') {
    alert('Add stars');
  }
  if (fourStar.value === '') {
    alert('Add stars');
  }
  if (threeStar.value === '') {
    alert('Add stars');
  }
  if (twoStar.value === '') {
    alert('Add stars');
  }
  if (oneStar.value === '') {
    alert('Add stars');
  }

  e.preventDefault();


  const fiveSum = fiveStar.value * 5;
  const fourSum = fourStar.value * 4;
  const threeSum = threeStar.value * 3;
  const twoSum = twoStar.value * 2;
  const oneSum = oneStar.value * 1;
  const resultNumbers = (fiveSum + fourSum + threeSum + twoSum + oneSum);
  const resultInStars = (resultNumbers * 500 / 2500 / 100)




  document.querySelector('.score').textContent = resultInStars.toFixed(2);

  document.getElementById('total').innerHTML = resultNumbers;


};

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});


