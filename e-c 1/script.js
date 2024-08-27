
const bar = document.getElementById("bar");
const closee = document.getElementById("close");
const nav = document.getElementById("nav1");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closee) {
    closee.addEventListener('click', () => {  // Corrected to addEventListener
        nav.classList.remove('active');
    });
}
