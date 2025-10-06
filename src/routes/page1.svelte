<script>
  import backgroundImage from '../back/bg_1.png';
  import womanImage from '../perso/femme.png';
  import rouetImage from '../assets/rouet.png';

</script>

<style>
  .container {
    width: 100vw;
    height: 100vh; 
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


  .rouet {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform-origin: center center;
  transform: scale(0.6);
  z-index: 1;
  position: absolute;
  top: 20%;
  left: -20%;
  transition: transform 0.3s ease;
  scale: 0.7;
}

.rouet:hover {
  transform: scale(0.66);
}


</style>

<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

    <!-- Personnage féminin -->
    <div class="women" style="background-image: url({womanImage})"></div>
    <!-- Rouet -->

    <div class="rouet" style="background-image: url({rouetImage})"></div>

  </div>
</main>
