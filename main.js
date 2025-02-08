
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "Valentine vui vẻ <3".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        const span = document.createElement("span");
        span.innerText = titles[index];
        titleElement.appendChild(span);


        index++;
        setTimeout(appendTitle, 300); // 300ms delay giữa các chữ cái
      }
    }

    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️"; // Biểu tượng trái tim
    
      // Đặt vị trí trái tim ngẫu nhiên trên màn hình
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Tốc độ rơi
    
      document.querySelector(".hearts-container").appendChild(heart);
    
      // Xóa trái tim sau khi rơi xong để tránh tràn bộ nhớ
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
    
    // Tạo trái tim liên tục mỗi 300ms
    setInterval(createHeart, 300);
    

    appendTitle();
    clearTimeout(c);
  }, 1000);
};
