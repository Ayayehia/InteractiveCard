// card information Dom
var number = document.querySelector(".card-number");
var date = document.querySelector(".card-date");
var threedigits = document.querySelector("#three-digits-card");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var name1 = document.querySelector(".card-name");
// Input information Dom
var inputname = document.querySelector("#firstname");
var inputnumber = document.querySelector("#number");
var inputmonth = document.querySelector("#month");
var inputyear = document.querySelector("#year");
var inputcvc = document.querySelector("#cvcnum");
var btn = document.querySelector("button");
// adding the confirmation by (adding class .form-hidden) to(formbody) remove the form and add (#confirm-visible) to (confirmation) appear the confirmation letter
var confirmation = document.querySelector("#true");
var formbody = document.querySelector(".form");
var btn = document.querySelector(".btn");
var errormess = document.querySelectorAll(".success");

// function to link the input value with the data on the card
function changenumber(e) {
  number.innerText = format(e.target.value);
}
function changename(e) {
  name1.innerText = e.target.value;
}
function yearo(e) {
  year.innerText = e.target.value;
}
function montho(e) {
  month.innerText = e.target.value;
}
function changecvc(e) {
  threedigits.innerText = e.target.value;
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
inputname.addEventListener("keyup", changename);
inputnumber.addEventListener("keyup", changenumber);
inputmonth.addEventListener("keyup", montho);
inputyear.addEventListener("keyup", yearo);
inputcvc.addEventListener("keyup", changecvc);
// function to show confirmation message when done
function confmess() {
  var confirmation = document.querySelector(".confirm");
  var formbody = document.querySelector(".form");
  var errormess = document.querySelectorAll(".error");

  formbody.classList.remove("form");
  formbody.classList.add("form-hidden");
  confirmation.classList.remove("confirm");
  confirmation.classList.add("confirm-visible");
  errormess.forEach(function (error) {
    error.classList.remove("error");
    error.classList.add("success");
  });
}
//function to show error message if the input field is empty or with a null value
function errormsg() {
  var errormess = document.querySelectorAll(".success");
  errormess.forEach(function (error) {
    error.classList.remove("success");
    error.classList.add("error");
  });
}

// event Handler to call the function if there is an error in the form or once your form is valid
btn.onclick = function () {
  var inputname = document.querySelector("#firstname");
  var inputnumber = document.querySelector("#number");
  var inputmonth = document.querySelector("#month");
  var inputyear = document.querySelector("#year");
  var inputcvc = document.querySelector("#cvcnum");

  if (inputname.value.trim() === null || inputname.value === "") {
    inputname.style.borderColor = "red";
    errormsg();
  } else if (inputname.value.trim() != null || inputname.value != "") {
    confmess();
  }

  if (inputnumber.value.trim() === null || inputnumber.value === "") {
    inputnumber.style.borderColor = "red";
    errormsg();
  } else if (inputnumber.value.trim() != null || inputnumber.value != "") {
    confmess();
  }

  if (inputmonth.value.trim() === null || inputmonth.value === "") {
    inputmonth.style.borderColor = "red";
    errormsg();
  } else if (inputmonth.value.trim() != null || inputmonth.value != "") {
    confmess();
  }
  if (inputyear.value.trim() === null || inputyear.value === "") {
    inputyear.style.borderColor = "red";
    errormsg();
  } else if (inputyear.value.trim() != null || inputyear.value != "") {
    confmess();
  }
  if (inputcvc.value.trim() === null || inputcvc.value === "") {
    inputcvc.style.borderColor = "red";
    errormsg();
  } else if (inputcvc.value.trim() != null || inputcvc.value != "") {
    confmess();
  }
};
