window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});



$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $('.logo').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / (elementHeight + 50));
            return opacity;
        }
    });
    $('.headerbg').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = scrollTop / 500;
            return opacity;
        }
    });

});






const appear = document.querySelector('.appear');
const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            entry.unobserve(entry.target);

        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(appear);

const appear2 = document.querySelector('.appear2');
const cb2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            entry.unobserve(entry.target);

        }
    });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(appear2);

let slideIndex = 1;
showSlides(slideIndex);

//next and prev
function plusSlides(n) {
    showSlides(slideIndex += n);
}


//current img
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }