
let el_scroll_math = document.getElementById("header");
let el_nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
        if (window.scrollY >= 50) {
            el_scroll_math.style.backdropFilter = 'blur(15px)'; 
            el_scroll_math.style.boxShadow = 'var(--shadow-1)';
            el_scroll_math.style.height = '5.4rem'
            el_scroll_math.style.background = 'rgba(33, 36, 40, 0.8705882353)';
            el_nav.style.height = '5.4rem'
        }
        else
        {
            el_scroll_math.style.boxShadow = 'none';
            el_scroll_math.style.backdropFilter = 'blur(0)';
            el_scroll_math.style.background = '#212428';
            el_nav.style.height = '7.4rem'
            el_scroll_math.style.height = '7.4rem'
        }
    
})

// ===========================================================================================

const dynamicText = document.querySelector("h2 span");
const words = ["Developer.", "Professional Coder.", "Developer."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// ===========================================================================================


