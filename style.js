const input = document.getElementById("input");
const button = document.getElementById("button");
const bar = document.getElementById("bar");

const clearBar = () => {
  bar.style.width = "0px";
  bar.style.transitionDuration = "0s";
};

button.addEventListener("click", () => {
  clearBar();
  const runProgressBar = () => {
    const inputVal = input.value;
    const maxVal = parseInt(input.getAttribute("max"));
    const minVal = parseInt(input.getAttribute("min"));
    console.log({ maxVal, minVal });
    bar.style.transitionDuration = "0.3s";
    if (inputVal < 20) {
      bar.style.backgroundColor = "red";
      bar.style.width = `${inputVal}%`;
      // bar.style.transition = "width 0.5s ";
    }
    if (inputVal >= 20 && inputVal <= 75) {
      bar.style.backgroundColor = "yellow";
      bar.style.width = `${inputVal}%`;
      // bar.style.transition = "width 0.5s ";
    }
    if (inputVal > 75) {
      bar.style.backgroundColor = "green";
      bar.style.width = `${inputVal}%`;
      // bar.style.transition = "width 0.5s ";
    }

    if (inputVal == " " || inputVal < minVal || inputVal > maxVal) {
      bar.style.width = "0px";
      bar.style.backgroundColor = "white";
      alert("type a number from 1-100");
    }
  };
  const timeOut = setTimeout(runProgressBar, 400);
});
