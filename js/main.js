$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive : {
          // breakpoint from 0 up
          0 : {
            dots: false,
            margin: 40,
            loop: true,
            items: 1,
          },
          // breakpoint from 601 up
          601 : {
              items: 2,
          },
          // breakpoint from 1001 up
          1001 : {
              items: 3,
          }
      }
    });
  });

//   Видео

const videoBtn = document.querySelector('#video--btn');
const videoImg = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');
const videoOverlay = document.querySelector('.video-overlay');
const arrow = document.querySelector('.header__arrow')
const header = document.querySelector('.header')
const styleHeigh = window.getComputedStyle(header).height;
const windowInnerHeight = window.innerHeight
const width = window.innerWidth

let w = parseInt(width,10);
let a = parseInt(styleHeigh,10);
let b = parseInt(windowInnerHeight,10);

if (a > b){
  arrow.classList.add('none');
}

if (w < 1000) {
  videoBtn.addEventListener('click', function () {
    video.classList.add('ready');
    videoImg.classList.add('none');
    videoWrapper.classList.remove('video-overlay');
    videoBtn.classList.add('none');
    video.play();
    video.setAttribute('controls', "controls");
  });
} else {
    videoBtn.addEventListener('click', function () {
    video.classList.add('ready');
    videoImg.classList.add('none');
    videoWrapper.classList.remove('video-overlay');
    videoBtn.classList.add('none');
    video.play();
  });
  video.addEventListener('click', function () {
    if(video.classList.contains('ready')) {
      video.classList.remove('ready')
      videoBtn.classList.remove('none');
      video.pause();
    } else {
      video.classList.add('ready');
      videoImg.classList.add('none');
      videoBtn.classList.add('none');
      video.play();
      }
  }) 
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
  document.body.classList.toggle('overflow');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let clik0 = document.querySelector('.clik-0');
let clik1 = document.querySelector('.clik-1');
let clik2 = document.querySelector('.clik-2');
let clik3 = document.querySelector('.clik-3');
let source = document.querySelector('.source')
clik0.addEventListener('click', function(){
    source.setAttribute('src', "./img/doc_2022-12-17_22-48-37.mp4");
    source.classList.remove('none');
    document.body.classList.add('overflow');
    source.play();
    setTimeout( function(){
    source.classList.add('none');
    document.body.classList.remove('overflow');
    source.pause();
    source.removeAttribute('src');
    }, 1500)
  }
)
clik1.addEventListener('click', function(){
  source.setAttribute('src', "./img/doc_2022-12-17_22-48-37.mp4");
  source.classList.remove('none');
  document.body.classList.add('overflow');
  source.play();
  setTimeout( function(){
  source.classList.add('none');
  document.body.classList.remove('overflow');
  source.pause();
  source.removeAttribute('src');
  }, 1500)
}
)
clik2.addEventListener('click', function(){
  if (w < 1000) {
    source.setAttribute('src', "./img/IMG_0396.MP4");
    source.classList.remove('none');
    source.classList.add('source-m');
    document.body.classList.add('overflow');
    source.play();

    setTimeout( function(){
      source.classList.add('none');
      document.body.classList.remove('overflow');
      source.classList.remove('source-m');
      source.pause();
      source.removeAttribute('src');
    }, 1100)
  } else {
    source.setAttribute('src', "./img/doc_2022-12-17_22-48-37.mp4");
    source.classList.remove('none');
    document.body.classList.add('overflow');
    source.play();
  
    setTimeout( function(){
      source.classList.add('none');
      document.body.classList.remove('overflow');
      source.pause();
      source.removeAttribute('src');
    }, 1500)
  }
})
clik3.addEventListener('click', function(){
  if (w < 1000) {
    source.setAttribute('src', "./img/IMG_0396.MP4");
    source.classList.remove('none');
    source.classList.add('source-m');
    document.body.classList.add('overflow');
    source.play();

    setTimeout( function(){
      source.classList.add('none');
      document.body.classList.remove('overflow');
      source.classList.remove('source-m');
      source.pause();
      source.removeAttribute('src');
    }, 1100)
  } else {
    source.setAttribute('src', "./img/doc_2022-12-17_22-48-37.mp4");
    source.classList.remove('none');
    document.body.classList.add('overflow');
    source.play();
  
    setTimeout( function(){
      source.classList.add('none');
      document.body.classList.remove('overflow');
      source.pause();
      source.removeAttribute('src');
    }, 1500)
  }
})
