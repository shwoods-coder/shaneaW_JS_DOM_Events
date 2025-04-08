// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", function () {
    let onLoadEl = document.getElementById("onload");
    onLoadEl.innerHTML = "<h1>I loaded cause the DOM was fully loaded</h1>";
  });
  
  // Keydown Event
  let directionEl = document.getElementById("direction");
  
  document.addEventListener("keydown", function (e) {
    directionEl.innerText = `The key you pressed is ${e.code}`;
  });
  
  // Click Event (Exercise)
  let clickButton = document.getElementById("clickMe");
  
  clickButton.addEventListener("click", function () {
    clickButton.innerText = "You clicked me!";
  });
 
  function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn");
    btn.classList.toggle("glow");
  }
  
  const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeBtn.innerText = "Light Mode";
  } else {
    modeBtn.innerText = "Dark Mode";
  }
});

  