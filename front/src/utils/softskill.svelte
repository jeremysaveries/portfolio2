<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
  </script>
  
  <div class="softskillContainer">
    <ul class="softskillDev">
      <li>
        <i class="fa-brands fa-html5"></i>
        <p>html</p>
      </li>
      <li>
        <i class="fa-brands fa-css"></i>
        <p>css</p>
      </li>
      <li>
        <i class="fa-brands fa-js"></i>
        <p>Javascript</p>
      </li>
      <li>
        <i class="fa-brands fa-php"></i>
        <p>php</p>
      </li>
    </ul>
  
  
  </div>
  
  <style>
    .softskillContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .softskillDev {
      list-style: none;
      background-color: #34495e;
      column-count: 2;
      width: 300px;
      border-radius: 20px;
      height: 186px;
      color: white;
      margin-bottom: 8em;
    }
    .softskillDev p {
      font-size: 1em;
    }
    .softskillDev i {
    font-size: 2em;
    margin-top: 1em;
    }

    

    .softskillDesign {
      list-style: none;
      background-color: #34495e;
      width: 300px;
      margin-bottom: 6em;
      border-radius: 20px;
    }
  
    .devtitle {
      color: white;
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
    }
  </style>
  