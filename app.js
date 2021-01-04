const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

showError = function (position, message) {
  position.parentElement.querySelector("small").innerText = message;
  position.parentElement.className = "form-control error";
};

showSuccess = function (position, message) {
  position.parentElement.className = "form-control success";
};

isEmailValid = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  myArr = new Array(username, email, password, password2);
  myArr.forEach((position) => {
    if (position.value.trim() === "") {
      showError(position, "Position is required");
    } else {
      showSuccess(position);
    }
  });
  if (!isEmailValid(email)) {
    showError(email, "Email invalid");
  }
});
