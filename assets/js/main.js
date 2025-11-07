const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next")

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.style.display = 'block';
    nav.classList.toggle('active')
}

let current = 0;

function updateDots(index){
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active")
}

prev.addEventListener("click", () =>{
    current = (current - 1 + dots.length) % dots.length;
    updateDots(current);
})

next.addEventListener("click", () =>{
    current = (current + 1) % dots.length;
    updateDots(current);
})

