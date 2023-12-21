function validateLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    if (username === "Afifa28" && password === "student-nf23") {
      window.location.href = "sukses.html";
    } else {
      alert("Login gagal. Silakan coba lagi.");
    }
  }