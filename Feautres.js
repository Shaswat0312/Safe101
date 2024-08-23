// Analog Clock
function updateAnalogClock() {
  const timeElement = new Date();

  const hours = timeElement.getHours();
  const minutes = timeElement.getMinutes();
  const seconds = timeElement.getSeconds();

  // Calculate angles for each hand
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  // Rotate the clock hands
  document.querySelector('.hour').style.transform = `rotate(${hourAngle}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;
}

// Digital Flip Clock
function updateFlipClock() {
  const timeElement = new Date();

  const hours = String(timeElement.getHours()).padStart(2, '0');
  const minutes = String(timeElement.getMinutes()).padStart(2, '0');
  const seconds = String(timeElement.getSeconds()).padStart(2, '0');

  // Update the flip clock display
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update clocks every second
function updateClocks() {
  updateAnalogClock();
  updateFlipClock();
}

setInterval(updateClocks, 1000);
updateClocks();



