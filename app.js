function initNavToggle() {
    const toggleBtn = document.querySelector("#navToggle");
    const menu = document.querySelector("#navMenu");

    toggleBtn.addEventListener("click", function() {
        const isOpen = menu.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
}

initNavToggle();
const layananData = [
    { judul: "Bimbingan Akademik", kategori: "akademik"},
    { judul: "Job Fair", kategori: "karier"},
    { judul: "Coding Club", kategori: "komunitas"},
];

function renderLayanan(kategori = "semua") {
    const list = document.querySelector("#layananList");
    list.textContent = "";

    layananData.forEach(function (item) {
    if (kategori === "semua" || item.kategori === kategori) {
        const li = document.createElement("li");
        li.textContent = item.judul + " (" + item.kategori + ")";
        list.appendChild(li);
    }
    });
}

renderLayanan("semua")

document.querySelector("#filter-kategori").addEventListener("change", function(e) {
    renderLayanan(e.target.value);
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    
    answer.hidden = !answer.hidden;
    btn.setAttribute("aria-expanded", !answer.hidden);
  });
});

document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault ();

    const nama = document.querySelector("#namaInput").value;
    const email = document.querySelector("#emailInput").value;
    let valid = true;

    if (nama.trim().length < 3) {
        document.querySelector("#namaError").textContent = "Minimal 3 Huruf";
        valid=false;
    } else {
        document.querySelector("#namaError").textContent = "";
    }

    if (!email.includes("@")) {
        document.querySelector("#emailError").textContent = "Email tidak valid";
        valid=false;
    } else {
        document.querySelector("#emailError").textContent = "";

    }

    document.querySelector("#formSuccess").hidden = !valid;

});

const backBtn = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  backBtn.hidden = window.scrollY < 300;
});

backBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("theme-dark");

});