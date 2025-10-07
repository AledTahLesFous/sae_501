<script>
  import { onMount } from 'svelte';

  import backgroundImage from '../backgrounds/page1/bg_1.png';
  import backgroundImage2 from '../backgrounds/page1/bg_1_f2.png';
  import backgroundImage3 from '../backgrounds/page1/bg_1_f3.png';

  import womanImage from '../perso/femme.png';
  import rouetImage from '../assets/page1/rouet.png';

  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage, backgroundImage3, backgroundImage2, backgroundImage3];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });
</script>

<style>

  .women {
    position: absolute;
    width: 22%;
    height: 65%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: center center;
    transform: scale(0.9);
    z-index: 1;
    top: 35%;
    left: 45%;
    transition: transform 0.3s ease;
  }

  .women:hover {
    transform: scale(0.95);
  }

  .rouet {
  width: 45%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform-origin: center center;
  transform: scale(0.6);
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 7%;
  transition: transform 0.3s ease;
  scale: 0.7;
}

.rouet:hover {
  transform: scale(0.66);
}

.textbox {
  width: 50%;
  height: 30%;
  position: absolute;
  z-index: 1;
  top: 2%;
  left: 2%;
  transform-origin: center;
  opacity: 1;
  padding: 1%;
  color: white;
  font-family: 'Deutsch', sans-serif;
  font-size: clamp(0.5rem, 3vw, 2.5rem); /* min 1rem, max 2.5rem, mais responsive selon la largeur de la fenêtre */
  justify-content: space-around;
  background-size: contain;
  background-position: center;
  transform-origin: center center;
  border: 2px solid rgb(255, 255, 255);
}



</style>

<main>
  <div class="container">
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />

    <!-- Personnage féminin -->
    <div class="women" style="background-image: url({womanImage})"></div>

    <!-- Rouet -->
    <a 
      href="#/page2"
      class="rouet"
      style="background-image: url({rouetImage})"
      aria-label="Aller à la page 2"
    ></a>

    <div class="textbox">Il était une fois une jeune fille jolie, mais négligente et paresseuse.</div>

    <div class="bt">
      <div class="hidetext"></div>
    </div>
  </div>
</main>
