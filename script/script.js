const eyeBtn = document.getElementById('eye');
const passwordText = document.getElementById('signupPassword');

eyeBtn.addEventListener("click", () => {
    if (passwordText.type === "password") {
        passwordText.type = "text"
    } else {
        passwordText.type = "password"
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = signupForm.firstName.value.trim();
      const lastName = signupForm.lastName.value.trim();
      const signupMail = signupForm.email.value.trim();
      const signupPassword = signupForm.password.value.trim();

      if (!firstName || !lastName || !signupMail || !signupPassword) {
        alert("All fields are required");
        return;
      }

      if (!signupMail.includes("@")) {
        alert("Invalid email");
        return;
      }

      if (signupPassword.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }

      const payload = {
        firstName,
        lastName,
        email:signupMail,
        password:signupPassword,
      };

      console.log("Signup payload:", payload);
      window.location.href = "index.html";
    
    });
  }

  // ---------- LOGIN ----------
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const loginEmail = loginForm.email.value.trim();
      const loginPassword = loginForm.password.value.trim();

      if (!loginEmail || !loginPassword) {
        alert("Both fields are required");
        return;
      }

      if (!loginEmail.includes("@")) {
        alert("Invalid email");
        return;
      }

      if (loginPassword.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }

      const payload = {
        email:loginEmail,
        password:loginPassword,
      };

      console.log("Login payload:", payload);
    });
  }

})
