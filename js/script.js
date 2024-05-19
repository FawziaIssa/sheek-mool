searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let liginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    liginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    liginForm.classList.remove('active');
}

window.onscroll= () =>{

    searchForm.classList.remove('active');


    if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');}
    else{
    document.querySelector('.header .header-2').classList.remove('active');}
}

window.onload= () =>{
    if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');}
    else{
    document.querySelector('.header .header-2').classList.remove('active');}
    fadeOut();
  }


function loader(){
  document.querySelector('.loader-container').classList.add('active');
}


function fadeOut(){
  setTimeout(loader,2000)
}



var swiper = new Swiper(".clothes-slider", {
    loop:true,
    centeredSolides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween:150,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween:150,

      },
      1024: {
        slidesPerView: 3,
        // spaceBetween:150,

      },
    },
  }
  );


  var swiper = new Swiper(".sale-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSolides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween:150,
      },
      450: {
        slidesPerView: 2,
        // spaceBetween:150,

      },
      768: {
        slidesPerView: 3,
        // spaceBetween:150,

      },
      1024: {
        slidesPerView: 4,
        // spaceBetween:150,

      },
      
    },
  }
  );


  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSolides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween:150,
      },
     
      768: {
        slidesPerView: 2,
        // spaceBetween:150,

      },
      1024: {
        slidesPerView: 3,
        // spaceBetween:150,

      },
      
    },
  }
  );

  var swiper = new Swiper(".reviws-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSolides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween:150,
      },
     
      768: {
        slidesPerView: 2,
        // spaceBetween:150,

      },
      1024: {
        slidesPerView: 3,
        // spaceBetween:150,

      },
      
    },
  }
  );