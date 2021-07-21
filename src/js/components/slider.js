export default function slider(place){
    const
        slider = document.querySelector(place),
        wrapper = document.querySelector(".wraper"),
        btnNext = slider.querySelector(".next"),
        btnPrev = slider.querySelector(".prev"),
        slides= slider.querySelectorAll(".slide");

    let
        countSlide = 0,
        slideWidthpx,
        slideWidth;
    const nextSlide = () =>{
        slideWidthpx = window.getComputedStyle(slides[0], null).getPropertyValue("width");
        slideWidth = slideWidthpx.substr(0, slideWidthpx.length - 2);
        slideWidth = +slideWidth + 15;
        if(countSlide + 1 < slides.length){
            countSlide++;
            wrapper.style.left = (-slideWidth * countSlide) + "px";
        }else{
            countSlide = -1;
            nextSlide();
        }
    };
    const prevSlide = () =>{
        slideWidthpx = window.getComputedStyle(slides[0], null).getPropertyValue("width");
        slideWidth = slideWidthpx.substr(0, slideWidthpx.length - 2);
        slideWidth = +slideWidth + 15;
        if(countSlide <= slides.length && countSlide > 0){
            countSlide--;
            wrapper.style.left = (-slideWidth * countSlide) + "px";
        }else{
            countSlide = slides.length;
            prevSlide();
        }
    };

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
}