window.slideIndex = 1;
window.slides = document.getElementsByClassName("slides");

function nextSlide(bool) {
    slides[slideIndex-1].style.display = "none";

    if (bool) {
        slideIndex++;
        if (slideIndex > 4) { slideIndex = 1 }
        else if (slideIndex <= 1) { slideIndex = 2 }
    }
    else {
        slideIndex--;
        if (slideIndex < 1) { slideIndex = 4 }
        else if (slideIndex >= 4) { slideIndex = 1 }
    }

    console.log(slideIndex)
    slides[slideIndex-1].style.display = "block";
}