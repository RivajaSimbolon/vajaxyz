const contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("body");

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    // Menampilkan peringatan jika ada input yang kosong
    alert("Harap isi semua kolom.");
    return;
  }

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      // URL halaman terima kasih
      window.location.href = "/thankyou.html";
    })
    .catch(() => {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    });
});
// JS untuk animasi teks ketik
const typed = new Typed(".typing-text", {
  strings: ["Front-End Web Developer", "UI/UX Designer", "Content Creator"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});
