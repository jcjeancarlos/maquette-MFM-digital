// ====== btn toggle ======
const buttons = document.querySelectorAll(".btn_toggle button");

const slider = document.querySelector(".btn_toggle .slider");

let selectedUniverse = "lotr";  // defaut

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // slide move
        slider.style.transform = `translateX(${index * 100}%)`;

        // class changer
        buttons.forEach(b => b.classList.remove("btn_active"));
        btn.classList.add("btn_active");

        // universe definition
        selectedUniverse = btn.textContent.includes("RINGS") ? "lotr" : "hp";
    });
});


// ====== form notification ======
const form = document.querySelector("form");
const notif = document.getElementById("notif");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // lotr msg
    if (selectedUniverse === "lotr") {
        notif.textContent =
            "Votre message a été envoyé ! Protégé par Gandalf, il traversera la Terre du Milieu en toute sécurité.";
    }

    // HP msg
    else {
        notif.textContent =
            "Votre message a été envoyé ! Un Auror du Ministère de la Magie veillera personnellement sur vos données.";
    }

    // css shows msg
    notif.classList.add("show");

    // css hidden msg again
    setTimeout(() => {
        notif.classList.remove("show");
    }, 5000);
});
