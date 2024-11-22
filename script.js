let currentSlide = 0;
const slides = document.querySelectorAll('.slides li');
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides; // Asegura que el índice esté dentro del rango
    const offset = -currentSlide * 100; // Calcula el desplazamiento
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Cambia automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);

// Muestra la primera diapositiva al cargar
showSlide(currentSlide);

const slider = document.querySelector('.slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

function showBio(integrante) {
    const bioPopup = document.getElementById('bio-popup');
    const bioTitle = document.getElementById('bio-title');
    const bioText = document.getElementById('bio-text');
    const bioDetails = document.getElementById('bio-details');
    const bioSocials = document.getElementById('bio-socials');

    switch (integrante) {
        case 'bio-lucas':
            bioTitle.innerText = 'Lucas Duran';
            bioText.innerText = 'Lucas es el baterista de la banda, conocido por su energía y ritmo contagioso, pero tambien repite su rol de baterista en la banda Resiliencia.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Lucas Ezequiel Duran<br><strong>Nacimiento:</strong> 15 de julio de 1990 (19 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Rio Negro, Cipolletti<br><strong>Rol en la banda:</strong> Baterista<br><strong>Ocupación:</strong> Músico';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/lucasezequiel1721/" target="_blank">Instagram</a> | <a href="https://www.facebook.com/lucas.duran.104?mibextid=ZbWKwL" target="_blank">Facebook</a>';
            break;
        case 'bio-genaro':
            bioTitle.innerText = 'Genaro Bilbao';
            bioText.innerText = 'Genaro toca la guitarra rítmica y aporta su voz a las canciones.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Genaro Bilbao<br><strong>Nacimiento:</strong> 22 de marzo de 1985 (39 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Córdoba, Argentina<br><strong>Rol en la banda:</strong> Guitarrista <br><strong>Ocupación:</strong> Músico';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/gena_bilbao/?igsh=a2VnenpwY3F3dXl0" target="_blank">Instagram</a> | <a href="https://www.facebook.com/genaro.bilbao?mibextid=ZbWKwL" target="_blank">Facebook</a>';
            break;
        case 'bio-eugenia':
            bioTitle.innerText = 'Maria Eugenia';
            bioText.innerText = 'Eugenia es la voz principal de la banda, con un estilo único y poderoso.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Maria Eugenia Manca<br><strong>Nacimiento:</strong> 8 de noviembre de 1992 (32 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Rosario, Argentina<br><strong>Rol en la banda:</strong> Voz<br><strong>Ocupación:</strong> Músico, Profesora de letras y Becaria en Fundacion Carolina';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/wolfeuge123/?igsh=MXduMWRkZDViemc5bw%3D%3D" target="_blank">Instagram</a> | <a href="https://www.facebook.com/euge.manca?mibextid=ZbWKwL" target="_blank">Facebook</a>';
            break;
        case 'bio-matias':
            bioTitle.innerText = 'Matias Pucheta';
            bioText.innerText = 'Matias es el guitarrista lead, conocido por sus solos impresionantes.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Matias Pucheta<br><strong>Nacimiento:</strong> 4 de junio de 1988 (36 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Mendoza, Argentina<br><strong>Rol en la banda:</strong> Guitarra Lead<br><strong>Ocupación:</strong> Músico';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/mati.rbl95/?igsh=MTJ6cno2bWpuazFsaw%3D%3D" target="_blank">Instagram</a> | <a href="https://www.facebook.com/Matypark?mibextid=ZbWKwL" target="_blank">Facebook</a>';
            break;
        case 'bio-juan':
            bioTitle.innerText = 'Juan Uircaleo';
            bioText.innerText = 'Juan es el bajista, aportando la base rítmica a las canciones.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Juan Uircaleo<br><strong>Nacimiento:</strong> 11 de septiembre de 1991 (33 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Tucumán, Argentina<br><strong>Rol en la banda:</strong> Bajista<br><strong>Ocupación:</strong> Músico';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/_wirk_/?igsh=MW8xNmFkaWZyNDNiYg%3D%3D#" target="_blank">Instagram</a> | <a href="https://www.facebook.com/people/Juan-Uircaleo/pfbid02bUfBtM1HVYMAKdo1XGg3MJXS6kpC7RmEMQTy9e6Pqmngtn2A51TcUqEnXfdyAQ6Dl/?mibextid=ZbWKwL" target="_blank">Facebook</a>';
            break;
        case 'bio-luciano':
            bioTitle.innerText = 'Luciano Pistagnesi';
            bioText.innerText = 'Luciano fue el ex-baterista de la banda, dejando una huella imborrable.';
            bioDetails.innerHTML = '<strong>Nombre real:</strong> Luciano Pistagnesi<br><strong>Nacimiento:</strong> 7 de febrero de 1987 (37 años)<br><strong>Nacionalidad:</strong> Argentina<br><strong>Residencia:</strong> Córdoba, Argentina<br><strong>Rol en la banda:</strong> Ex-Baterista<br><strong>Ocupación:</strong> Músico';
            bioSocials.innerHTML = '<strong>Redes sociales:</strong><br><a href="https://www.instagram.com/lucianopistagnesi/?igsh=ZjFscndzd3Vzdjk4#" target="_blank">Instagram</a>';
            break;
    }

    bioPopup.style.display = 'flex'; // Mostrar la caja de biografía
}

function hideBio() {
    const bioPopup = document.getElementById('bio-popup');
    bioPopup.style.display = 'none'; // Ocultar la caja de biografía
}

