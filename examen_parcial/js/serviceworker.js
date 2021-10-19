// asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_PWA';

// Archivos a cachear en la app
var urlsToCache = [
	'./',
	'./css/all.min.css',
	'./css/bootstrap.min.css',
	'./css/estilos.css',
    './css/estilos.css.map',
	'./css/normalize.css',	
	'./css/images/layers-2x.png',
	'./css/images/layers.png',
	'./css/images/marker-icon-2x.png',
	'./css/images/maarker-shadow.jpg',
	'./css/images/blog02.jpg',
    './css/leaflet.css',
    './css/normalize.css',
    './css/swiper-bundle.min.css',

    './images/adornosHalloween.jpeg',
	'./images/arbolito3.jpeg',
	'./images/calbaza_1.jpeg',
	'./images/catrina.jpeg',
    './images/catrina2.jpeg',
	'./images/coco.jpeg',
    './images/conjuro.jpeg',
	'./images/cortomuertos.jpeg',
	'./images/disfraz.jpeg',
    './images/dulces_1.jpeg',
    './images/eso.jpeg',
    './images/fantasmaswiper.jpeg',
    './images/festival.jpeg',
    './images/halloweenpelicula.jpeg',
    './images/halloweentheoffice.jpeg',
    './images/hocuspocus.jpeg',
    './images/Jack.jpeg',
    './images/jeepers.jpeg',
    './images/librovida.webp',
	'./images/logo.png',
    './images/mansion.png',
    './images/misaswiper.jpeg',
    './images/muertospeli.jpeg',
    './images/nahuala.jpeg',
    './images/niñosswiper.jpeg',
    './images/novia.jpeg',
    './images/ofrenda.jpeg',
    './images/ofrendaSwiper.jpeg',
	'./images/origenmuertos.jpg',
    './images/pandemuertoSwiper.jpeg',
    './images/pedirdulces.jpeg',
    './images/pandemuertoSwiper.jpeg',
    './images/pedirducles.jpeg',
    './images/scarymovie.jpg',
    './images/tradicion.jpeg',
    './images/xcaret.png',

	'./js/anime.min.js',
	'./js/bootstrap.bundle.min.js',		
	'./js/jquery-3.6.0.min.js',
    './js/leaflet.js',
    './js/mapid.js',
	'./js/mis-scripts.js',
	'./js/serviceworker.js',
    './js/serviceworker.js',
    './js/swiper-bundle.js',




	'./webfonts/fa-brands-400.eot',
	'./webfonts/fa-brands-400.svg',
	'./webfonts/fa-brands-400.ttf',
	'./webfonts/fa-brands-400.woff',
	'./webfonts/fa-brands-400.woff2',
	'./webfonts/fa-regular-400.eot',
	'./webfonts/fa-regular-400.svg',
	'./webfonts/fa-regular-400.ttf',
	'./webfonts/fa-regular-400.woff',
	'./webfonts/fa-regular-400.woff2',
	'./webfonts/fa-solid-900.eot',
	'./webfonts/fa-solid-900.svg',
	'./webfonts/fa-solid-900.ttf',
	'./webfonts/fa-solid-900.woff',
	'./webfonts/fa-solid-900.woff2',
];


// evento Install
self.addEventListener('install', e=> {
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache)
							.then(() => { 
							 self.skipWaiting();	
							});
			})
			.catch(err => console.log('No se ha registrado el cache', err))
	); 
});

// evento Activate
// que la app funcione sin conexion
self.addEventListener('activate', e=> {
	const cacheWhitelist = [CACHE_NAME];
	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})						
				);
			})		
			.then(()=> {
				// Activar cache
				self.clients.claim();
			})
	);

}); 


// evento fetch 
self.addEventListener('fetch', e=> {
	e.respondWith(
		caches.match(e.request)
			.then(res => {
				if(res){
					// devuelvo datos desde cache
					return res;
				}

				return fetch(e.request);
			}) 
	);
});