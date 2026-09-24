const contenedor = document.querySelector(".corazones");

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-flotante");

    corazon.innerHTML = "❤️";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.fontSize =
        (15 + Math.random() * 25) + "px";

    corazon.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 9000);
}


setInterval(crearCorazon, 700);