// 타이머 시작 함수
function startTimer(duration, redirectURL) {
    let timer = duration;
    const interval = setInterval(() => {
      if (document.getElementById("time")) {
        document.getElementById("time").textContent = `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`;
      }
      if (--timer < 0) {
        clearInterval(interval);
        window.location.href = redirectURL;
      }
    }, 1000);
  }
  