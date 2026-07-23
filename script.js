const slides = document.querySelectorAll(".slide");

let current = 0;
let startX = 0;
let endX = 0;

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("touchstart",(e)=>{
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{
  endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    if(current < slides.length - 1){
      current++;
      showSlide(current);
    }
  }

  if(endX - startX > 50){
    if(current > 0){
      current--;
      showSlide(current);
    }
  }
});

showSlide(current);