<script>
  import backgroundImage from '../back/1.png';
  import womanImage from '../perso/femme.png';
</script>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: purple;
    z-index: 5;
    position: relative;
    overflow: hidden;
    object-fit: cover;

  }

  .fullscreen-background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .women {
    width: 100%;
    height: 100%;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: center center;
    transform: scale(0.6);
    z-index: 1;
    position: absolute;
    top: 17%;
    left: 5%;
    transition: transform 0.3s ease;
  }

  .women:hover {
    transform: scale(0.66);
  }

  @media (max-width: 1920px) {
    .women {
      transform: scale(calc(0.2 + (100vw - 480px) / (1920 - 480) * (0.8 - 0.2)));
    }
  }

  @media (max-height: 1080px) {
    .women {
      transform: scale(calc(0.2 + (100vh - 480px) / (1080 - 480) * (0.8 - 0.2)));
    }
  }
</style>

<main>
  <div class="container">
    <!-- Background avec object-fit -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

    <!-- Personnage féminin -->
    <div class="women" style="background-image: url({womanImage})"></div>
  </div>
</main>
