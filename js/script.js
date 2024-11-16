// let bar1 = document.getElementById('bar1');
// let bar2 = document.getElementById('bar2');
// let bar3 = document.getElementById('bar3');
// let menu = document.getElementById('menu');
// let hamburger_menu = document.getElementById('hamburgerMenu');



// hamburgerMenu.addEventListener('click', function() {
//     if (menu.classList.contains('-translate-y-full')) {
//         menu.classList.remove('-translate-y-full')
//         menu.classList.add('translate-y-0');
//         bar1.classList.add('rotate-45', 'translate-y-2');
//         bar2.classList.add('opacity-0');
//         bar3.classList.add('-rotate-45', '-translate-y-2');
//     } else {
//         menu.classList.remove('translate-y-0');
//         menu.classList.add('-translate-y-full');
//         bar1.classList.remove('rotate-45', 'translate-y-2');
//         bar2.classList.remove('opacity-0');
//         bar3.classList.remove('-rotate-45', '-translate-y-2');
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger_menu");
    const menu = document.getElementById("menu");

    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    isOpn = false

    hamburgerMenu.addEventListener("click", () => {
        // Toggle menu visibility
        menu.classList.toggle("-translate-y-full");

        // Toggle hamburger icon to "X"
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("translate-y-1");

        bar2.classList.toggle("opacity-0");

        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("-translate-y-2");
        isOpen = true
    });
    if (isOpen == true) {
        hamburgerMenu.addEventListener("click", () => {
            bar1.classList.toggle("-rotate-45");
            bar1.classList.toggle("-translate-y-1");

            bar2.classList.toggle("opacity-100");

            bar3.classList.toggle("rotate-45");
            bar3.classList.toggle("translate-y-2");
            isOpen = false
        });
    };
});