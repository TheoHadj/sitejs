let app = document.getElementById('app');

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;


let form = document.createElement('form');
form.id = 'registerForm';

let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailInput.id = 'email';
form.appendChild(emailInput);

let emailError = document.createElement('span');
emailError.id = 'emailError';
emailError.className = 'error';
form.appendChild(emailError);
emailError.style.height="30px"

let passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Mot de passe';
passwordInput.required = true;
passwordInput.id = 'password';
form.appendChild(passwordInput);

let passwordError = document.createElement('span');
passwordError.id = 'passwordError';
passwordError.className = 'error';
form.appendChild(passwordError);
passwordError.style.height="30px"


let confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirmer le mot de passe';
confirmPasswordInput.required = true;
confirmPasswordInput.id = 'confirmPassword';
form.appendChild(confirmPasswordInput);

let confirmPasswordError = document.createElement('span');
confirmPasswordError.id = 'confirmPasswordError';
confirmPasswordError.className = 'error';
form.appendChild(confirmPasswordError);
confirmPasswordError.style.height="30px"

let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = "S'inscrire";
form.appendChild(submitButton);

form.style.display="flex";
form.style.flexDirection="column";
form.style.justifyItems;



app?.appendChild(form);


form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Email non valide';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = 'Le mot de passe doit contenir entre 6 et 12 caractères, un chiffre et un caractère spécial.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas';
    valid = false;
  } else {
    confirmPasswordError.textContent = '';
  }

  if (valid) {
    alert('Inscription réussie !');
  }
});