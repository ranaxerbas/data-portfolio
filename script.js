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



document.addEventListener('DOMContentLoaded', () => {
    const functionSpan = document.querySelector('.function');
    const text = "Web Designer/Developer";
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            functionSpan.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100);
        } else {
            functionSpan.style.borderRight = 'none';
        }
    };
    functionSpan.textContent = "";
    typeEffect();
});

document.addEventListener('DOMContentLoaded', () => {
    const homeImg = document.querySelector('.home-img img');

    if (homeImg) {
        homeImg.addEventListener('click', () => {
            window.open('http://www.linkedin.com/in/rana-m-erbas', '_blank');
        });
    } else {
        console.error('Element .home-img img niet gevonden!');
    }
});



const items = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
},{
    threshold: 0.5
});
items.forEach(item => {
    observer.observe(item);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}