<script>

  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { textboxVisible } from '../stores.js';

  import backgroundImage from '../backgrounds/page1/bg_1.avif';
  import backgroundImage2 from '../backgrounds/page1/bg_1_f2.avif';
  import backgroundImage3 from '../backgrounds/page1/bg_1_f3.avif';

  import womanImage from '../assets/page1/femme.avif';
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

    function handleClick() {
      push('/page2');

  }
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
  transform: scale(0.67);
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 7%;
  transition: transform 0.3s ease;
  scale: 0.7;
}

.rouet:hover {
  transform: scale(0.7);
}

</style>

<main>
  <div class="container">
    <!-- Background -->
      <img src={currentBg} alt="Background" class="fullscreen-background" />

    <!-- Personnage féminin -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="women" style="background-image: url({womanImage})" on:click={handleClick}
      aria-label="Aller à la page 2"></div>

    <!-- Rouet -->
    <a 
      href="#/page2"
      class="rouet"
      style="background-image: url({rouetImage})"
      aria-label="Aller à la page 2"
    ></a>

  {#if $textboxVisible}
    <div class="textbox">
      Il y avait une fois une jeune fille qui était jolie, mais négligente et paresseuse.
    </div>
  {/if}

  </div>
</main>
