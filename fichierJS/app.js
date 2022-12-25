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




  var fond =0;

  document.getElementById('FondCouleur').addEventListener("click",function(){

    if(fond === 0){
      document.querySelector("body").classList.add("fondbody");
      document.querySelector("nav").classList.add("FondMenu");
      document.querySelector(".acceuilMenu").classList.add("FondMenu");
    document.querySelector(".acceuilMenu").classList.add("traitBlanc");
    document.querySelector(".langagesMenu").classList.add("FondMenu");
    document.querySelector(".langagesMenu").classList.add("traitBlanc");
    document.querySelector(".projetsMenu").classList.add("FondMenu");
    document.querySelector(".projetsMenu").classList.add("traitBlanc");
    document.querySelector(".formationsMenu").classList.add("FondMenu");
    document.querySelector(".formationsMenu").classList.add("traitBlanc");
    document.querySelector(".stagesMenu").classList.add("FondMenu");
    document.querySelector(".stagesMenu").classList.add("traitBlanc");
    document.querySelector(".veilleMenu").classList.add("FondMenu");
    document.querySelector(".veilleMenu").classList.add("traitBlanc");
    document.getElementById('FondCouleur').innerHTML="☀️";
      document.getElementById('div1').classList.add("noir");
      document.querySelector(".TitreLangage").classList.add("noir");
      document.querySelector(".TexteLangage").classList.add("noir");
      document.querySelector(".TitreProjet").classList.add("noir");
      document.querySelector(".TexteProjet").classList.add("noir");
      document.querySelector(".TitreFormation").classList.add("noir");
      document.querySelector(".TexteFormation").classList.add("noir");
      document.querySelector(".TitreStage").classList.add("noir");
      document.querySelector(".TexteStage").classList.add("noir");
      document.querySelector(".TitreVeille").classList.add("noir");
      document.querySelector(".TexteVeille").classList.add("noir");
      document.querySelector(".d1VeilleTechno").classList.add("noir");
      document.querySelector(".d2VeilleTechno2").classList.add("noir");
      document.querySelector(".d1IA").classList.add("noir");
      localStorage.setItem("FondCouleur", "20");
      fond++;
    }

    else{
      document.querySelector("body").classList.remove("fondbody");
      document.querySelector("nav").classList.remove("FondMenu");
      document.querySelector(".acceuilMenu").classList.remove("FondMenu");
    document.querySelector(".acceuilMenu").classList.remove("traitBlanc");
    document.querySelector(".langagesMenu").classList.remove("FondMenu");
    document.querySelector(".langagesMenu").classList.remove("traitBlanc");
    document.querySelector(".projetsMenu").classList.remove("FondMenu");
    document.querySelector(".projetsMenu").classList.remove("traitBlanc");
    document.querySelector(".formationsMenu").classList.remove("FondMenu");
    document.querySelector(".formationsMenu").classList.remove("traitBlanc");
    document.querySelector(".stagesMenu").classList.remove("FondMenu");
    document.querySelector(".stagesMenu").classList.remove("traitBlanc");
    document.querySelector(".veilleMenu").classList.remove("FondMenu");
    document.querySelector(".veilleMenu").classList.remove("traitBlanc");
    document.getElementById('FondCouleur').innerHTML="🌙";
      document.getElementById('div1').classList.remove("noir");
      document.querySelector(".TitreLangage").classList.remove("noir");
      document.querySelector(".TexteLangage").classList.remove("noir");
      document.querySelector(".TitreProjet").classList.remove("noir");
      document.querySelector(".TexteProjet").classList.remove("noir");
      document.querySelector(".TitreFormation").classList.remove("noir");
      document.querySelector(".TexteFormation").classList.remove("noir");
      document.querySelector(".TitreStage").classList.remove("noir");
      document.querySelector(".TexteStage").classList.remove("noir");
      document.querySelector(".TitreVeille").classList.remove("noir");
      document.querySelector(".TexteVeille").classList.remove("noir");
      document.querySelector(".d1VeilleTechno").classList.remove("noir");
      document.querySelector(".d2VeilleTechno2").classList.remove("noir");
      document.querySelector(".d1IA").classList.remove("noir");
      localStorage.removeItem("FondCouleur");
      fond--;
    }


  })


  if(localStorage.hasOwnProperty('FondCouleur')){
    document.querySelector("body").classList.add("fondbody");
    document.querySelector("nav").classList.add("FondMenu");
    document.querySelector(".acceuilMenu").classList.add("FondMenu");
    document.querySelector(".acceuilMenu").classList.add("traitBlanc");
    document.querySelector(".langagesMenu").classList.add("FondMenu");
    document.querySelector(".langagesMenu").classList.add("traitBlanc");
    document.querySelector(".projetsMenu").classList.add("FondMenu");
    document.querySelector(".projetsMenu").classList.add("traitBlanc");
    document.querySelector(".formationsMenu").classList.add("FondMenu");
    document.querySelector(".formationsMenu").classList.add("traitBlanc");
    document.querySelector(".stagesMenu").classList.add("FondMenu");
    document.querySelector(".stagesMenu").classList.add("traitBlanc");
    document.querySelector(".veilleMenu").classList.add("FondMenu");
    document.querySelector(".veilleMenu").classList.add("traitBlanc");
    document.getElementById('FondCouleur').innerHTML="☀️";
      document.getElementById('div1').classList.add("noir");
      document.querySelector(".TitreLangage").classList.add("noir");
      document.querySelector(".TexteLangage").classList.add("noir");
      document.querySelector(".TitreProjet").classList.add("noir");
      document.querySelector(".TexteProjet").classList.add("noir");
      document.querySelector(".TitreFormation").classList.add("noir");
      document.querySelector(".TexteFormation").classList.add("noir");
      document.querySelector(".TitreStage").classList.add("noir");
      document.querySelector(".TexteStage").classList.add("noir");
      document.querySelector(".TitreVeille").classList.add("noir");
      document.querySelector(".TexteVeille").classList.add("noir");
      document.querySelector(".d1VeilleTechno").classList.add("noir");
      document.querySelector(".d2VeilleTechno2").classList.add("noir");
      document.querySelector(".d1IA").classList.add("noir");
      fond="1";
  }