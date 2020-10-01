const clock = () => {
  var hours, mins, secs;
  const fullDate = new Date();
  hours = fullDate.getHours();
  mins = fullDate.getMinutes();
  secs = fullDate.getSeconds();

  hours < 10 ? (hours = "0" + hours) : hours;
  mins < 10 ? (mins = ":0" + mins) : (mins = ":" + mins);
  secs < 10 ? (secs = ":0" + secs) : (secs = ":" + secs);

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = mins;
  document.getElementById("second").innerHTML = secs;
};
setInterval(clock, 1000);
const alerts = () => {
  const msg = document.querySelector(".msg");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 500);
};

const time = () => {
  let min = document.getElementById("set_min");
  if (min.value === "") {
    alert("Enter Your Minutes");
  } else {
    alerts();
    min = document.getElementById("set_min").value * 5000;
    setTimeout(() => {
      show();
    }, min);
  }
};

const show = () => {
  let show = document.querySelector(".wrap");
  const audio = document.getElementById("myAudio");

  show.style.display = "block";
  audio.play();
  setTimeout(() => {
    audio.pause();
    show.style.display = "none";
  }, 16000);
};
