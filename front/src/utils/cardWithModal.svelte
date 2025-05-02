<script>
    export let imageSrc = "";
    export let imageAlt = "";
    export let title = "";
    export let modalContent = "";
    export let modalLink = "";
    export let modalLinkText = "";
  
    let showModal = false;
  
    function toggleModal() {
      showModal = !showModal;
    }
  </script>
  
  <div class="card">
    <img class="card-image" src={imageSrc} alt={imageAlt} />
    <div class="card-content">
      <h2>{title}</h2>
      <a href="#" class="btnModal" on:click|preventDefault={toggleModal}>
        voir plus
      </a>
    </div>
  
    {#if showModal}
      <div class="modal-backdrop" on:click={toggleModal}>
        <div class="modal-content" on:click|stopPropagation>
          <div class="modal-header">
            <p>{modalContent}</p>
  
            <button on:click={toggleModal}>&times;</button>
          </div>
          <div class="modal-body" innerHTML={modalContent}></div>
          {#if modalLink}
            <a
              class="modal-link"
              href={modalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {modalLinkText}
            </a>
          {/if}
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .card {
      width: 300px; /* Largeur fixe pour les cartes */
      border-radius: 15px;
      background-color: #34495e;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      padding: 10px;
      text-align: center;
    
     
    }
  
    .card-image {
      width: 90%;
      margin: 0 auto;
      border-radius: 10px;
      display: block;
      background-color: white;
    }
  
    .card-content {
      padding: 10px;
    }
  
    .card-content h2 {
      padding-bottom: 1em;
      color: white;
    }
  
    .btnModal {
      color: #ffc048;
      margin-top: 1em;
    }
  
    .btnModal:hover {
      background: #0056b3;
    }
  
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 90%;
      color: black;
    }
  
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
  
    .modal-body {
      font-size: 1rem;
    }
    .modal-link {
      display: block;
      margin-top: 16px; /* Espacement au-dessus du lien */
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }
  
    .modal-link:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 768px) {
      .card {
        width: 200px;
      }
    }
  </style>
  