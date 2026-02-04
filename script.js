

const buttons = document.querySelectorAll(".btn_toggle button");

const slider = document.querySelector(".btn_toggle .slider");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("btn_active"));
        
        btn.classList.add("btn_active");
        slider.style.transform = `translateX(${index * 100}%)`;
    });
});
