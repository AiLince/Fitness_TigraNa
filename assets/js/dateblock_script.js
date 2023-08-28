const countdownDate = new Date("2023-12-31T23:59:59").getTime();
const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const remainingTime = countdownDate - now;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  console.log(remainingTime);
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (remainingTime < 0) {
    clearInterval(updateCountdown);
    const changedCountdown = document.querySelector(".countdown");
    changedCountdown.innerHTML = "Время вышло:(";
    changedCountdown.style.fontSize = "2rem";
    changedCountdown.style.fontWeight = "600";
    changedCountdown.style.color = "#3b4674";
  }
}, 1000);
