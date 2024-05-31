// DOM Elements 
const date = document.getElementById('date');
const time = document.getElementById('time');
const greeting = document.getElementById('greet');
const name = document.getElementById('name');
const work = document.getElementById('work');

// options
const showAMPM = true;

// show time 
function showTime() {
  let today = new Date();
  let day = today.getDate();
  let month = today.toLocaleString('default', { month: 'long' });
  let year = today.getFullYear();
  let hour = today.getHours();
  let mint = today.getMinutes();
  let sec = today.getSeconds();

  // output date 
  date.innerHTML = `${month}<span> </span>${day}<span>, </span>${year}`;

  // set AM or PM 
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12 hr format 
  hour = hour % 12 || 12;

  // output time 
  time.innerHTML = `${hour}<span>:</span>${addZero(mint)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// add zero to time 
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting 
function setBgAndGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour >= 5 && hour < 12) {
    // morning
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url('https://www.pexels.com/photo/landscape-photo-of-pathway-between-green-leaf-trees-615348/')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'Black';
  }
  else if (hour >= 12 && hour < 16) {
    // afternoon 
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/4326473/pexels-photo-4326473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';

  }
  else if (hour >= 16 && hour <= 20) {
    // evening
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    greeting.textContent = 'Good Evening';
  }
  else {
    // night
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    greeting.textContent = 'Good Night';
    document.body.style.color = 'white';
  }

  setTimeout(setBgAndGreet, 1000);

}

// Get name 
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  }
  else {
    name.textContent = localStorage.getItem('name');
  }
}

// set name 
function setName(e) {
  if (e.type === 'keypress') {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }
  else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get work
function getWork() {
  if (localStorage.getItem('work') === null) {
    work.textContent = '[Enter work]';
  }
  else {
    work.textContent = localStorage.getItem('work');
  }
}

// set Focus 
function setWork(e) {
  if (e.type === 'keypress') {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('work', e.target.innerText);
      work.blur();
    }
  }
  else {
    localStorage.setItem('work', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
work.addEventListener('keypress', setWork);
work.addEventListener('blur', setWork);

// Run 
showTime();
setBgAndGreet();
getName();
getWork();
