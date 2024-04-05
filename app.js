document.addEventListener("DOMContentLoaded", function () {

  // Obtener elementos relevantes
const modal = document.getElementById("modal");
const btnVerTrailer = document.getElementById("ver-trailer");
const spanClose = document.getElementsByClassName("close")[0];
const iframe = document.getElementById("video");

// Mostrar el modal cuando se hace clic en el botón "Ver Trailer"
btnVerTrailer.onclick = function() {
  modal.style.display = "block";
}

// Ocultar el modal cuando se hace clic en el botón de cierre (x)
// Ocultar el modal y detener la reproducción del video cuando se hace clic en el botón de cierre (x)
spanClose.onclick = function() {
  modal.style.display = "none";
  // Detener la reproducción del video
  const iframeSrc = iframe.src;
  iframe.src = iframeSrc; // Esto detiene la reproducción del video y lo reinicia
}

// Ocultar el modal y detener la reproducción del video cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    // Detener la reproducción del video
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc; // Esto detiene la reproducción del video y lo reinicia
  }
}


var menuItems = document.querySelectorAll('.menu li a');

// Iterar sobre cada enlace y agregar un evento de clic
menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    // Eliminar la clase 'active' de todos los elementos de enlace
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    // Agregar la clase 'active' al enlace clickeado
    event.target.classList.add('active');
  });
});


  // Variables para almacenar el índice actual del contenido
  let currentIndex = 0;

  // Obtener referencias a los elementos relevantes
  const poster = document.querySelector(".poster");
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  // Arreglo de información de las películas
  const movies = [
    {
      posterUrl:
        "https://lh3.googleusercontent.com/proxy/8NNuLzyjKLZEO-oPa6gjCXpVEvEsZxqpJyuxra2buSlitLa2n-kFuKUBL-DgUYcipqoJUYHTy2ZMXdHfXLIq9IiLJ3d4cWHYvBBv9I1jyRwxmIM",
      title: "John Wick 4",
      description: `John Wick 4 comienza con el personaje del título (Keanu Reeves)
        huyendo de nuevo mientras tiene a cientos de asesinos pisándole los
        talones. El villano principal de la serie es el Marqués de Gramont
        (Bill Skarsgård), un líder de la Alta Mesa que sigue aumentando la
        recompensa por la cabeza de
        
        Wick mientras también arregla algunos asuntos dentro de la
        organización, incluyendo la posible eliminación de Winston Scott
        (Ian McShane) y algunas de las decisiones que tomó en el pasado.`,
    },
    {
      posterUrl:
        "https://i.ebayimg.com/images/g/tD4AAOSw31JfmYLd/s-l1600.jpg",
      title: "Matrix",
      description: `El programador informático Thomas Anderson, más conocido en el mundo de los hacker como Neo, está en el punto de mira del temible agente Smith. Otros dos piratas informáticos, Trinity y Morfeo, se ponen en contacto con Neo para ayudarlo a escapar. Matrix te posee. Sigue al conejo blanco.`,
    },
    {
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2JkNzZlMTAtNzRkYy00YzIyLTkzZWMtOTAzNmI5ZjU3NDQ1XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
      title: "Society of the snow",
      description:
        "En 1972, un vuelo procedente de Uruguay se estrella en un glaciar en los Andes. Solo 29 de sus 45 pasajeros sobreviven al accidente. Atrapados en uno de los entornos más hostiles del planeta, se ven obligados a luchar por sus vidas.",
    },
  ];

  // Función para actualizar el contenido con el índice dado
  function updateContent(index) {
    const movie = movies[index];
    poster.src = movie.posterUrl;
    title.textContent = movie.title;
    description.textContent = movie.description;
  }

  // Función para manejar el clic en la flecha derecha
  arrowRight.addEventListener("click", function () {
    if (currentIndex < movies.length - 1) {
      currentIndex++;
      updateContent(currentIndex);
      // Mostrar la flecha izquierda si no estamos en el primer elemento
      arrowLeft.style.display = "inline";
    }
    // Ocultar la flecha derecha si estamos en el último elemento
    if (currentIndex === movies.length - 1) {
      arrowRight.style.display = "none";
    }
  });

  // Función para manejar el clic en la flecha izquierda
  arrowLeft.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateContent(currentIndex);
      // Mostrar la flecha derecha si no estamos en el último elemento
      arrowRight.style.display = "inline";
    }
    // Ocultar la flecha izquierda si estamos en el primer elemento
    if (currentIndex === 0) {
      arrowLeft.style.display = "none";
    }
  });
});



