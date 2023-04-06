function validateEmail() {
	const emailInput = document.getElementById("email");
	const emailError = document.getElementById("email-error");
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (!emailRegex.test(emailInput.value)) {
		emailError.style.display = "inline";
		emailInput.classList.add("error");
		return false;
	} else {
		emailError.style.display = "none";
		emailInput.classList.remove("error");
		emailInput.classList.add("valid");
		return true;
	}
}

function validatePhone() {
	const phoneInput = document.getElementById("phone");
	const phoneError = document.getElementById("phone-error");
	const phoneRegex = /^[0-9]+$/;
	if (!phoneRegex.test(phoneInput.value)) {
		phoneError.style.display = "inline";
		phoneInput.classList.add("error");
		return false;
	} else {
		phoneError.style.display = "none";
		phoneInput.classList.remove("error");
		phoneInput.classList.add("valid");
	return true;
}




const form = document.getElementById("customer-service-form");
form.addEventListener("submit", function(event) {
event.preventDefault();
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const agreeInput = document.getElementById("agree");
const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
const phoneRegex = /^\d{10}$/;
let valid = true;
if (!nameRegex.test(nameInput.value)) {
valid = false;
nameInput.classList.add("error");
}
if (!emailRegex.test(emailInput.value)) {
valid = false;
emailInput.classList.add("error");
}
if (!phoneRegex.test(phoneInput.value)) {
valid = false;
phoneInput.classList.add("error");
}
if (!agreeInput.checked) {
valid = false;
}
if (valid) {
form.submit();
} else {
alert("Please fill out all required fields correctly.");
}
});
