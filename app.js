document.addEventListener("DOMContentLoaded", function () {

const modal = document.getElementById("modal");
const btnVerTrailer = document.getElementById("ver-trailer");
const spanClose = document.getElementsByClassName("close")[0];
const iframe = document.getElementById("video");


btnVerTrailer.onclick = function() {
  modal.style.display = "block";
}


spanClose.onclick = function() {
  modal.style.display = "none";
 
  const iframeSrc = iframe.src;
  iframe.src = iframeSrc; 
}


window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
   
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc; 
  }
}


var menuItems = document.querySelectorAll('.menu li a');


menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
  
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
   
    event.target.classList.add('active');
  });
});



  let currentIndex = 0;

 
  const poster = document.querySelector(".poster");
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

 
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


  function updateContent(index) {
    const movie = movies[index];
    poster.src = movie.posterUrl;
    title.textContent = movie.title;
    description.textContent = movie.description;
  }


  arrowRight.addEventListener("click", function () {
    if (currentIndex < movies.length - 1) {
      currentIndex++;
      updateContent(currentIndex);
 
      arrowLeft.style.display = "inline";
    }
  
    if (currentIndex === movies.length - 1) {
      arrowRight.style.display = "none";
    }
  });


  arrowLeft.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateContent(currentIndex);
  
      arrowRight.style.display = "inline";
    }

    if (currentIndex === 0) {
      arrowLeft.style.display = "none";
    }
  });
  
  document.getElementById("finalizarBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores del formulario
    var movie = document.getElementById("movie").value;
    var name = document.getElementById("name").value;

    window.location.href = "resultado.html?movie=" + encodeURIComponent(movie) + "&name=" + encodeURIComponent(name);
  });


});



