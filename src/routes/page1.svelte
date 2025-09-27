<style>
  .container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: purple;
    overflow: hidden; /* évite les débordements éventuels */
  }

  .fullscreen-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../back/1.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
  
  .women {
    position: absolute;
    top: 17%;
    left: 6%;
    width: 30vw; /* taille adaptative */
    height: auto; /* respecte les proportions */
    background-image: url("../perso/femme.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    pointer-events: none; /* optionnel si tu ne veux pas interagir avec */
  }
</style>

<main>
  <div class="container">
    <div class="fullscreen-background"></div>
    <div class="women"></div>
  </div>
</main>
