const ONE_SECOND = 1000;


function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  function getCurrentTime() {
    const currentTime = new Date();
    const hours = addZero(currentTime.getHours());
    const minutes = addZero(currentTime.getMinutes());
    const seconds = addZero(currentTime.getSeconds());
  
    // Konkatenacja
    // return hours + ":" + minutes + ":" + seconds
  
    // Interpolacja
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function main() {
    // Pobranie referencji do elementu drzewa DOM
    const $clock = document.querySelector("#clock");
  
    // Cykliczne renderowanie aktualnego czasu
    setInterval(function () {
      const time = getCurrentTime();
      $clock.textContent = time;
    }, ONE_SECOND);
  }
  
  window.addEventListener("load", main);
