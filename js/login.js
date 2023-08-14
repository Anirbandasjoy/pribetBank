document.getElementById("loginBtn").addEventListener("click", () => {
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPassword = document.getElementById("inputPassword").value;
  if (inputEmail === "bank@gmail.com" && inputPassword === "pribetbank") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid password, please try again");
  }
});
