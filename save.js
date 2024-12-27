const loginButton = document.getElementById("loginBtn");
const form = document.getElementById("autoSaveForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function saveFormData() {
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem("formData")) || {};
  nameInput.value = savedData.name || ""; 
  emailInput.value = savedData.email || ""; 
}

nameInput.addEventListener("input", saveFormData);
emailInput.addEventListener("input", saveFormData);

window.addEventListener("DOMContentLoaded", loadFormData);

loginButton.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields before logging in.");
    return;
  }

  alert(`Welcome, ${name}! Your email is ${email}.`);
});
