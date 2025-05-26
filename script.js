function checkAnswers() {
    const a1 = document.getElementById('answer1').value.toLowerCase();
    const a2 = document.getElementById('answer2').value.toLowerCase();
    const a3 = document.getElementById('answer3').value.toLowerCase();
  
    if (a1 === 'dog' && a2 === 'bookstore' && a3 === 'phone') {
      document.getElementById('result').textContent = "🎉 정답! 다음 방으로 이동 중...";
      setTimeout(() => {
        window.location.href = "picture.html";
      }, 1500);
    } else {
      document.getElementById('result').textContent = "❌ 다시 시도해보세요!";
    }
  }
  