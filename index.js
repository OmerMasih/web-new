function openForm(formId) {
  document.getElementById(formId).style.display = "flex";
}

function closeForm(formId) {
  document.getElementById(formId).style.display = "none";
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful (Frontend Demo)");
    closeForm("login");
  } else {
    alert("Please fill all fields");
  }
}

function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    alert("Signup successful (Frontend Demo)");
    closeForm("signup");
  } else {
    alert("Please fill all fields");
  }
}
