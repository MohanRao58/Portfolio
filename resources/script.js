function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
  } else {
      localStorage.setItem("theme", "light");
  }
}

window.onload = function () {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("darkModeSwitch").checked = true;
  }
};


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var formData = new FormData(this);
      console.log(this);
      fetch('https://script.google.com/macros/s/AKfycbycxK7wezas0sU2AleZMzhboXstNaTZ1zzyO3zarr1wI3xNrYT09j4aVeWXISHqqxcd/exec', { //use app script deploymet Id here
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          var confirmationMessage = document.getElementById('confirmationMessage');
          confirmationMessage.style.display = 'block';

          setTimeout(function() {
              confirmationMessage.style.display = 'none';
          }, 10000);

          document.getElementById('contactForm').reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
});
