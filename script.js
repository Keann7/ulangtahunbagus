document.addEventListener('DOMContentLoaded', () => {
    // Set the hash to "#home" when the page loads
    window.location.hash = "#home";
});
document.addEventListener('DOMContentLoaded', () => {
    // Delay to ensure content is fully loaded
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // Adjust the delay as needed
});
document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has visited before
    if (!localStorage.getItem('visited')) {
        // Set to "Home" if not visited before
        window.scrollTo(0, 0);
        localStorage.setItem('visited', 'true');
    } else {
        // Scroll to the last position if visited
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, scrollPosition);
        }
    }
      // Save scroll position before leaving
    window.addEventListener('scroll', () => {
        localStorage.setItem('scrollPosition', window.scrollY);
    });
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: For additional features, e.g., adding an "active" class to the current section link in the navbar
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar ul li a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const wordSection = document.getElementById('word');
    const wordContent = wordSection.querySelector('.word-content');

    function checkScroll() {
        const sectionTop = wordSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.75) { // Trigger when section is 75% visible
            wordContent.classList.add('show');
        } else {
            wordContent.classList.remove('show');
        }
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});

const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
let index = 0;
const imagesToShow = 2;
const imageWidthWithMargin = (imageContainer.clientWidth / imagesToShow) + 10; // Lebar gambar + margin

function slideImages() {
    index++;
    if (index >= images.length / imagesToShow) {
        index = 0;
    }
    imageContainer.style.transform = `translateX(${-index * imageWidthWithMargin}px)`;
}

setInterval(slideImages, 3000);
