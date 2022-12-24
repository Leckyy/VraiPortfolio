  AOS.init();



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var diapo = 0;
  document.getElementById('diapoBT').addEventListener("click", function(){
    if(diapo === 0){
        document.querySelector(".swiper").style.display="block";
        document.querySelector(".SectionProjet").style.display="none";
        document.getElementById('diapoBT').innerHTML="Désactiver le diaporama";
        localStorage.setItem("diapo", "20");
        diapo++;
    }
    else{
        document.querySelector(".swiper").style.display="none";
        document.querySelector(".SectionProjet").style.display="flex";
        document.getElementById('diapoBT').innerHTML="Activer le diporama";
        localStorage.removeItem("diapo");
        diapo--;
       
    }
  })

  if(localStorage.hasOwnProperty('diapo')){
        document.querySelector(".swiper").style.display="block";
        document.querySelector(".SectionProjet").style.display="none";
        document.getElementById('diapoBT').innerHTML="Désactiver le diaporama";
    diapo="1";
  }

