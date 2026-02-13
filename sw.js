const CACHE_NAME = 'gilsena-v1';
const assets = [
  './',
  './index.html',
  './LOGO RADIO.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

/* Impede que o usuário selecione textos ou arraste imagens como num site */
body {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
}

/* Garante que o app ocupe toda a tela no celular sem barras brancas */
html, body {
    height: 100%;
    position: fixed;
    overflow: hidden;
    width: 100%;
}
