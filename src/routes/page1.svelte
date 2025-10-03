<style>
  .container {

    width: 100vw;
    height: 100vh;
    background-color: purple;
    z-index: 5;
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
    width: 100%; /* taille "originale" */
    height: 100%;
    background-image: url("../perso/femme.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: top left;
    transform: scale(0.6);
    z-index: 1;
    position: absolute;
    top: 38%;
    left: 25%;
  }

  @media (max-width: 1920px) {
    .women {
      transform: scale(calc(0.2 + (100vw - 480px) / (1920 - 480) * (0.8 - 0.2)));
    }
  }
</style>

<main>
  <div class="container">
    <div class="fullscreen-background"></div>
    <div class="container">
          <div class="women"></div>
    </div>

  </div>
</main>
