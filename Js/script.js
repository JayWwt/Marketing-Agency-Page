
//For Toggle Button
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});





//For Counter1
let upto = 0;
let counts1 = setInterval(updated1, 10);

function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML = ++upto + " " + "+";
    if (upto === 320) {
        clearInterval(counts1);
    }
}





//For Counter2
let Upto = 0;
let counts2 = setInterval(updated2, 10);

function updated2() {
    let count = document.getElementById('counter2');
    count.innerHTML = ++Upto + " " + "+";
    if (Upto === 230) {
        clearInterval(counts2);
    }
}




