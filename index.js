const inputEl = document.querySelector('.input');
const btnEl = document.getElementById('convert-btn');
const meters1 = document.getElementById('meters1');
const feet1 = document.getElementById('feet1');
const feet2 = document.getElementById('feet2');
const meters2 = document.getElementById('meters2');

btnEl.addEventListener('click', function () {
  getLength();
  getVolume();
  getMass();
});

function getLength() {
  let total = (inputEl.value * 3.281).toFixed(3);
  feet1.textContent = total;
  meters1.textContent = inputEl.value;
  if ((feet1.textContent = total)) {
    let totalMeters = (inputEl.value * 0.304).toFixed(3);
    meters2.textContent = totalMeters;
    feet2.textContent = inputEl.value;
  }
}

const liters1 = document.getElementById('liters1');
const liters2 = document.getElementById('liters2');
const gallons1 = document.getElementById('gallons1');
const gallons2 = document.getElementById('gallons2');

function getVolume() {
  gallons1.textContent = (inputEl.value * 0.264).toFixed(3);
  liters1.textContent = inputEl.value;

  if (inputEl.value) {
    gallons2.textContent = inputEl.value;
    liters2.textContent = (inputEl.value * 3.785).toFixed(3);
  }
}

const kilos1 = document.getElementById('kilos1');
const kilos2 = document.getElementById('kilos2');
const pounds1 = document.getElementById('pounds1');
const pounds2 = document.getElementById('pounds2');

function getMass() {
  kilos1.textContent = inputEl.value;
  pounds1.textContent = (inputEl.value * 2.204).toFixed(3);
  if (inputEl.value) {
    pounds2.textContent = inputEl.value;
    kilos2.textContent = (inputEl.value * 0.453).toFixed(3);
  }
}
