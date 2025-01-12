const buttonNewNavigator = [
    { id: "newNavigator-button", image: "assets/button-extra-nav.png" }
];

function setupNewNavigatorMenu() {
    const navRight = document.querySelector('.first-nav-right');
    const newNavigatorPanel = document.getElementById('newNavigator-menu-panel');
    const navContainer = document.getElementById('nav-container');

    const newNavigatorData = buttonNewNavigator[0];
    const newNavigatorButton = document.createElement('img');
    newNavigatorButton.id = newNavigatorData.id;
    newNavigatorButton.src = newNavigatorData.image;
    newNavigatorButton.alt = "newNavigator Menu";
    newNavigatorButton.style.display = "none";
    navContainer.appendChild(newNavigatorButton);

    function updateNavDisplay() {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 768) {
            if (navRight && navRight.parentNode) {
                navContainer.removeChild(navRight);
            }
            newNavigatorButton.style.display = "block";
        } else {
            if (!navContainer.contains(navRight)) {
                navContainer.appendChild(navRight);
            }
            newNavigatorButton.style.display = "none";
            newNavigatorPanel.classList.remove('active');
        }
    }

    newNavigatorButton.addEventListener('click', () => {
        newNavigatorPanel.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (
            !newNavigatorPanel.contains(event.target) &&
            event.target.id !== newNavigatorButton.id
        ) {
            newNavigatorPanel.classList.remove('active');
        }
    });

    newNavigatorPanel.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            newNavigatorPanel.classList.remove('active');
        }
    });

    window.addEventListener('resize', updateNavDisplay);
    updateNavDisplay();
}

document.addEventListener('DOMContentLoaded', setupNewNavigatorMenu);


const photoRow = document.getElementById('photo-row');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const photos = [
    "assets/gezin.jpg",
    "assets/ecom.jpg",
    "assets/siblings.jpg",
    "assets/yem-yus.jpg",
    "assets/dedisom.JPG",
    "assets/geboorte.JPG",
    "assets/yemma.JPG",
    "assets/eco-sino.jpg",
    "assets/fam5.JPG",
    "assets/fam4.JPG",
    "assets/sister.jpg",
    "assets/kind-fam.JPG",
    "assets/bahar.jpg",
    "assets/fam1.JPG",
    "assets/kind-fam2.jpg",
    "assets/dede1.JPG",
    "assets/pamuk-muezzy.JPG",
    "assets/yus.png",
    "assets/vacay.JPG",
    "assets/zilli2.JPG",
    "assets/dede2.JPG",
    "assets/bahar-muezzy.png",
    "assets/katten.jpg",
    "assets/amsterdam.JPG",
    "assets/feyza.jpg",
    "assets/ozhan.JPG",
    "assets/yem-sev.JPG",
    "assets/pamuk-dede.PNG",
    "assets/vacay-vtc.jpg",
    "assets/sevde1.PNG",
    "assets/og-kuzens.jpg",
    "assets/aleyna.JPG",
    "assets/kuzis.jpg",
    "assets/ozge.JPG",
    "assets/vacay-pt.JPG",
    "assets/zilli.JPG",
    "assets/bahar2.JPG",
    "assets/fam2.JPG",
    "assets/dede-kist.JPG"
];

let currentIndex = 0;
const photosPerPage = 3;

function displayPhotos() {
    photoRow.innerHTML = '';
    const start = currentIndex * photosPerPage;
    const end = start + photosPerPage;
    const photosToShow = photos.slice(start, end);

    photosToShow.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Photo";

        const col = document.createElement('div');
        col.className = 'albumImg';
        col.appendChild(img);
        photoRow.appendChild(col);
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayPhotos();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < Math.ceil(photos.length / photosPerPage) - 1) {
        currentIndex++;
        displayPhotos();
    }
});

displayPhotos();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}