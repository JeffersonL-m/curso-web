const hamburger = document.getElementById("hamburger");
/*pega o botão*/
const navLinks = document.getElementById("nav-links");

const btnTopo = document.getElementById("btn-topo");


/*adiciona um ouvinte de evento, evento de clique*/

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

btnTopo.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
