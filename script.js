const animeData = [
    { id: 1, name: 'Alya', image: 'img/Alya.jpg', websiteUrl: 'https://galleryalya.netlify.app' },
    { id: 2, name: 'Nezuko', image: 'img/Nezuko.jpg', websiteUrl: 'https://gallerynezuko.netlify.app' },
    { id: 3, name: 'Hinata', image: 'img/Hinata.jpg', websiteUrl: 'https://galleryhinata.netlify.app' },
    { id: 4, name: 'Yukihanna', image: 'img/Yukihanna.jpg', websiteUrl: 'https://galeriayukihanna.netlify.app' },
    { id: 5, name: 'Holo', image: 'img/Holo.jpg', websiteUrl: 'https://galleryholo.netlify.app' },
    { id: 6, name: 'Marin', image: 'img/Marin.jpg', websiteUrl: 'https://gallerymarin.netlify.app' },
    { id: 7, name: 'Yor', image: 'img/Yor.jpg', websiteUrl: 'https://galleryyor.netlify.app' },
    { id: 8, name: 'Tsunade', image: 'img/Tsunade.jpg', websiteUrl: 'https://gallerytsunade.netlify.app' },
    { id: 9, name: 'Komi', image: 'img/Komi.jpg', websiteUrl: 'https://gallerykomi.netlify.app' },
    { id: 10, name: 'Power', image: 'img/Power.jpg', websiteUrl: 'https://gallerypower.netlify.app' },
];
const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.classList.add('anime-card');
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.name}">
        <div class="anime-info">
            <h3>${anime.name}</h3>
        </div>
    `;
    card.addEventListener('click', () => {
        window.open(anime.websiteUrl, '_blank');
    });
    return card;
}

function renderAnimeGrid(animes) {
    animeGrid.innerHTML = '';
    animes.forEach(anime => {
        const card = createAnimeCard(anime);
        animeGrid.appendChild(card);
    });
    animateCards();
}

function animateCards() {
    gsap.from('.anime-card', {
        duration: 0.6,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: 'power2.out'
    });
}

function filterAnime(searchTerm) {
    return animeData.filter(anime => 
        anime.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const filteredAnime = filterAnime(searchTerm);
    renderAnimeGrid(filteredAnime);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value;
        const filteredAnime = filterAnime(searchTerm);
        renderAnimeGrid(filteredAnime);
    }
});

renderAnimeGrid(animeData);

