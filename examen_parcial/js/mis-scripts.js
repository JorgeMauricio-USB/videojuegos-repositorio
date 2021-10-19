// Service Worker
if ('serviceWorker' in navigator) {
	console.log('Si está disponible el serviceWorker en tu navegador');
	navigator.serviceWorker.register('./js/serviceworker.js')
						   .then(res => console.log('El serviceWorker se ha cargado correctamente', res))
						   .catch(err => console.log('El serviceWorker no se ha podido registrar', err))

  }else{
    console.log('PROBLEMAS para usar serviceWorker en tu navegador');
  }




// *---------------------------
// Swiper de index.html
// *---------------------------
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// termina swiper


// *---------------------------
//Inicia animación título y simbolitos
// *---------------------------

  // declarar variable 1
    const texta01 = document.querySelector (".text-1");
    texta01.innerHTML = texta01.textContent.replace(/\S/g,"<span>$&</span>");
  // declarar variable 2
    const texta02 = document.querySelector('.text-2');
    texta02.innerHTML = texta02.textContent.replace(/\S/g,"<span>$&</span>")
    const animation= anime.timeline({
      targets : '.text-1 span, .text-2',    
      loop:true,
    });
    
    animation
      .add({
          rotate:0,           
          scale:[5,1],  
          opacity: [0,.8],  
          easing: "easeOutBack", 
          duration:3000,      
          delay : anime.stagger(100),
      })
    
// final animación título y siimbolitos






