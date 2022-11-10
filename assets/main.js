function showTime () {
    let date = new Date () ;

    let hh = (clock.getHours()) ; 
    let mm = (clock.getMinutes());
    let ss = (clock.getSeconds());
    let amPm = "AM" ;

    if (hh == 0 ) {
        hh = 12; 
    } 
    if ( hh > 12 ) {

        hh = hh - 12;
        amPm = "PM";
    }

        let timeAtm = hh + ":" + mm + ":" + ss + " " + amPm ;
        let time = document.querySelector(".clock").innerHTML = timeAtm ; 

}
//let time = querySelector(".clock");
    //function update () {
      //  showTime ();
      //  setInterval(showTime, 1000) ;
   // } ;

    //update () ;

// sliders gavaketeb tore amas vegaraferi gavuge, wavshale , axlidan davwere da still same



//slider


const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const startAutoSlider = document.querySelector(".start-auto-slider");
const stopAutoSlider = document.querySelector(".stop-auto-slider");


//console.log(slides);


let activeIndex = 0 ; 
let sliderIntervalId = null ; 

function renderSliders () {
    slides.forEach ((slide, index) => {
    if (activeIndex = index ) {
            slide.classList.add("active") ;
    } else { 
        slide.classList.remove("active") ; 
    }
});

}

function nextSlide () {
    if (activeIndex === slides.length -1  ) {
            activeIndex = 0 ;
     } else { activeIndex ++ ;
    }
    renderSliders () ;
}

function prevSlide  () {
    if (activeIndex === 0 ) {
            activeIndex = slides.length - 1 ; 
    } else {
            activeIndex -- ;
    }
    renderSliders ();
}


let photoSlide = null ; 
stop.addEventListener('click' , stopAutoSliderFn) ;
start.addEventListener('click' , startAutoSliderFN) ;

function startAutoSliderFn () {
    photoSlide = setInterval (nextSlide , 2000 ) ; 

}

function stopAutoSliderFn () {
    if (sliderIntervalId) {
            clearInterval (sliderIntervalId) ;
            sliderIntervalId = null ;
    }

}


function initSlider(){
    renderSliders();
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
    // button.addEventListener('click', pushButton);
    startAudioSliderFn();
    stopAudioSLiderFn() ;
}

initSlider () ;
    

// vapirebdi gagrdzelebas da mesame tasks magram arafers achvenebs vizualurad rasac ak vcer saertod, 
// ashkarad misamarti scoria  da consolitac gamoakvs dawerili kodi magram araferi iclveba da sheveshvi , gtxov mitxari ra aris arasworad
// ris gamoc ar kitxulobs,damackda nervebi martla :(((



