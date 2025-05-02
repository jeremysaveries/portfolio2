<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    

  </script>
  
  <div class="softskillContainer">
    <h2 class="titleSkill">Front :</h2>
    <ul class="softskillFront">
      <li>
        <span>HTML </span>
        <i class="fa-brands fa-html5"></i>
      </li>
      <li>
        <span>CSS </span>
        <i class="fa-brands fa-css3"></i>
      </li>
      <li>
        <span>JavaScript </span>
        <i class="fa-brands fa-js"></i>
      </li>
      <li>
        <span>Svelte </span>
        <i class="icon-svelte"></i>
      </li>
    </ul>
  
    <h2 class="titleSkill">Back :</h2>
    <ul class="softskillBack">
      <li>
        <span>Node </span>
        <i class="fa-brands fa-node"></i>
      </li>
      <li>
        <span>Express </span>
        <i class="fa-brands fa-express"></i>
      </li>
      <li>
        <span>PostgreSQL </span>
        <i class="icon-postgresql"></i>
      </li>
      <li>
        <span>Sequelize </span>
        <i class="icon-sequelize"></i>
      </li>
    </ul>
  </div>
  
  
  <style>
   @import url("/public/fonts/style.css");
  
   .titleSkill {
  color: white;
  font-size: xx-large;
}

.softskillContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
}

.softskillFront, .softskillBack {
  color: #ffc048;
  list-style: none;
  font-size: 2em;
  padding: 0;
}

.softskillFront li, .softskillBack li {
  display: flex;
  align-items: center; /* Centre verticalement */
  gap: 10px; /* Ajoute de l'espace entre le texte et l'icône */
  margin-bottom: 8px; /* Ajoute un petit espace entre chaque ligne */
}

.softskillFront ul, .softskillBack ul {
  display: flex;
  flex-direction: column; /* Aligne les éléments en colonne */
  align-items: center; /* Centre les éléments horizontalement */
  gap: 1em;
}


.softskillFront i, .softskillBack i {
  color: white; /* Assure la couleur blanche */
}

  
  
  
  
    @media (max-width: 768px) {
      .softskillDev {
        font-size: 20px;
        width: 329px;
        text-align: start;
        border-radius: 21px;
      }
      .softskillDesign {
        border-radius: 21px;
      }
      .softskillDev li {
        display: inline-flex;
        align-items: baseline;
        gap: 1em;
      }

      .softskillFront{
        color: #ffc048;
        list-style: none;
        font-size: 1em;
        padding: 0;
      }

      .softskillBack{
        color: #ffc048;
        list-style: none;
        font-size: 1em;
        padding: 0;
      }
    }
  </style>
  