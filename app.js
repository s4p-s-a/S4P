

// Función para abrir el modal
function abrirModal() {
    document.getElementById("modal-contactos").style.display = "block";
   }
   
   // Función para cerrar el modal
   function cerrarModal() {
    document.getElementById("modal-contactos").style.display = "none";
   }




   let slideIndex = 1;
   let slides = document.getElementsByClassName("slide");
   
   function mostrarSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
   }
   
   function anteriorSlide() {
    mostrarSlide(slideIndex -= 1);
   }
   
   function siguienteSlide() {
    mostrarSlide(slideIndex += 1);
   }
   
   mostrarSlide(slideIndex);
   
   // Función para abrir el modal
   function abrirModalNosotros() {
    document.getElementById("modal-nosotros").style.display = "block";
   }
   
   // Función para cerrar el modal
   function cerrarModalNosotros() {
    document.getElementById("modal-nosotros").style.display = "none";
   }
   


   