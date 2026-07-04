//your JS code here. If required.
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert("Logged in as " + username);

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    existingBtn.style.display = 'inline-block';
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    existingBtn.style.display = 'none';
  }
});

// Handle "Login as existing user" button click
existingBtn.addEventListener('click', function() {
  const savedUsername = localStorage.getItem('username');
  alert("Logged in as " + savedUsername);
});

// On page load, check if credentials exist and show/hide the existing-user button
function checkExistingUser() {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'inline-block';
  } else {
    existingBtn.style.display = 'none';
  }
}

checkExistingUser();