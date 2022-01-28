// function darkMode() {
//     let element = document.body;
//     element.className = "dark-mode";
//     content.innerText = "Dark Mode is ON";
// }

// function lightMode() {
//     let element = document.body;
//     element.className = "light-mode";
//     content.innerText = "Dark Mode is OFF";
// }


const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

