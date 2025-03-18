<script>
  // @ts-nocheck
    import { onMount } from "svelte";  // 🚀 Ajout de l'import nécessaire
    import CardWithModel from "./utils/cardWithModal.svelte";
    import ContactForm from "./utils/contactForm.svelte";
    import Softskill from "./utils/softskill.svelte";
    import Admin from "./pages/login.svelte";
  
    let pathname = "";
  
    // Récupérer l'URL actuelle
    onMount(() => {
      pathname = window.location.pathname;
    });
  </script>
  
  {#if pathname === "/admin"}
    <Admin />
  {:else}
    <!-- Ton portfolio -->
  
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
          <div class="présentation">
            <p>
              À 34 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web. Suite à un titre professionnel niveau bac +2 Développeur Web à l'école Oclock, j’ai acquis les bases de plusieurs langages web (HTML, CSS, JavaScript), la gestion de bases de données ainsi que l'utilisation de logiciels tels que Figma, que j’utilise régulièrement pour créer des maquettes. J’ai ensuite pu exercer et améliorer ces compétences lors d’un stage d’un mois aux côtés de développeurs web expérimentés.
            </p>
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
  
        <section>
          <h2 class="softskillTittle">Mes compétences</h2>
          <Softskill />
        </section>
  
        <section>
          <div class="projets">
            <h2 class="projetTittle">Mes projets</h2>
          </div>
        </section>
  
        <section>
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
        </section>
  
        <section>
          <div class="contactForm">
            <h2 class="contactTitle">Contactez-moi</h2>
            <ContactForm />
          </div>
        </section>
      </div>
  
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
      </style>
    </main>
  {/if} <!-- 🔥 Fermeture correcte du bloc {#if} -->
  

