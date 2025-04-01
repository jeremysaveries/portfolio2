<script>
  // @ts-nocheck
  import CardWithModel from "./utils/cardWithModal.svelte";
  import ContactForm from "./utils/contactForm.svelte";
  import Softskill from "./utils/softskill.svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 1000, once: true });
  });


</script>

<header>
      <div class="headerContainer">
        <ul class="titleHeader">
          <li class="firstName">jeremy</li>
          <li class="lastName">saveries</li>
        </ul>
      </div>
    </header>
      
    <main>
      <div class="mainContainer">
        <div class="titlePoste">
          <h2 class="postName">Développeur Full Stack</h2>
        </div>
  
        <div class="mainContent">
          <div data-aos="fade-right">
          <div class="présentation">
            <p>                                 
              À 34 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web. Suite à un titre professionnel niveau bac +2 Développeur Web à l'école Oclock, j’ai acquis les bases de plusieurs langages web (HTML, CSS, JavaScript), la gestion de bases de données ainsi que l'utilisation de logiciels tels que Figma, que j’utilise régulièrement pour créer des maquettes. J’ai ensuite pu exercer et améliorer ces compétences lors d’un stage d’un mois aux côtés de développeurs web expérimentés.

              Aujourd’hui, je suis à la recherche d’un CDI en tant que développeur full stack, et je propose également mes services en freelance pour des projets web.
              
              Vous pouvez télécharger mon CV ci-dessous et me contacter directement via le formulaire de contact plus bas.
            </p>
          </div>
        </div>
          
          <div class="photoProfil">
            <img class="photo" src="public/img/profil.jpg" alt="photo de profil" />
          </div>
      </div>
  
        <div class="inputContainer">
          <a href="/public/document/cvjeremy5.pdf" download="cvjeremysaveries">
            <button class="inputButton">Télécharger mon CV</button>
          </a>
  
          <div class="flexLogo">
            <ul class="logoList">
              <li class="logoLinkedin">
                <a href="https://www.linkedin.com/in/jérémy-saveries">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li class="logoGitHub">
                <a href="https://github.com/jeremysaveries">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
       
     
          <h2 class="softskillTittle">Mes compétences</h2>
          <div data-aos="fade-up">
          <Softskill />
        </div>
 

        <div data-aos="fade-right">
          <div class="projets">
            <h2 class="projetTittle">Mes projets</h2>
          </div>
        </div>
  
        <div data-aos="fade-left">
          <div class="cardContainer">
            <CardWithModel
              imageSrc="/img/new logo.png"
              imageAlt="logo du projet"
              title="Site PetFoster Connect"
              modalContent="Pet Foster Connect est un site fictif..."
              modalLinkText="Voir plus"
              modalLink="https://github.com/mon-projet/petfoster-connect"
            />
            <CardWithModel
              imageSrc="/img/gameCollection.png"
              imageAlt="logo d'un autre projet"
              title="Game Collection"
              modalContent="Game Collection est une application dédiée aux passionnés de jeux vidéo..."
              modalLinkText="Voir plus"
              modalLink=""
            />
          </div>
        </div>
  
        <section>           
          <div class="contactForm">
            <h2 class="contactTitle">Contactez-moi</h2>
            <ContactForm />
          </div>
        </section>
      </div>
      </main>
  
      <footer>
        <div class="footerContainer">
          <h3 class="footerTitle">by jeremy.</h3>
          <p>© jeremysaveriesdev.com. All rights reserved</p>
        </div>
      </footer>


      <style>
        @import url("/css/reset.css");
        @import url("/css/style.css");
        
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");
        @import "@fortawesome/fontawesome-free/css/all.min.css";
        @import url("https://unpkg.com/aos@2.3.1/dist/aos.css");
      

        .fade-in {
    opacity: 0;
    transition: opacity 1s ease-in;
  }
  .fade-in.visible {
    opacity: 1;
  }
      </style>
 
  

