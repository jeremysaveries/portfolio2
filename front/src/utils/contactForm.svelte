<script>
    import emailjs from "@emailjs/browser";
  
    const sendEmail = (e) => {
      emailjs
        .sendForm("service_ui6pqxy", "template_pnrb6f3", e.target, {
          publicKey: "6BA5g6sbjLmd5cBPy",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
  </script>
  
  <form class="formStyle" on:submit|preventDefault={sendEmail}>
    <label>Nom</label>
    <input class="name" type="text" name="user_name" placeholder="votre nom" />
    <label>Email</label>
    <input
      class="email"
      type="email"
      name="user_email"
      placeholder="votre email"
    />
    <label>message</label>
    <textarea name="message" class="message" placeholder="votre message"
    ></textarea>
    <input class="envoyer" type="submit" value="envoyer" />
  </form>
  
  <style>
    .formStyle {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .formStyle label{
      color: white;
      margin-bottom: 1em
   
    }

    .contactForm{
      padding-top: 4em;
    }
  
    .name {
      height: 48px;
      width: 300px;
      margin-bottom: 1em;
      background-color: #1e272e;
      border: solid white 1px;
    }
  
    .email {
      height: 48px;
      width: 300px;
      margin-bottom: 1em;
      background-color: #1e272e;
      border: solid white 1px;
    }
  
    .message {
      height: 154px;
      width: 300px;
      margin-bottom: 1em;
      background-color: #1e272e;
      border: solid white 1px;
    }
    .envoyer {
      background-color: #ffc048;
      color: black;
      border-color: white;
      font-weight: bold;
      height: 50px;
      width: 129px;
      border-radius: 10px;
    }
  </style>