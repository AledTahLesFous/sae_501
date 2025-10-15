<script>
  import { onMount } from 'svelte';
  import { textboxVisible } from '../stores.js';

  import backgroundImage from '../backgrounds/page7/bg_7.avif';
  import backgroundImage2 from '../backgrounds/page7/bg_7_f2.avif';

  import servanteImage from '../assets/page7/servante.avif';
  import porteImage from '../assets/page7/porte.avif';
  import porteImage2 from '../assets/page7/porte_f2.avif';

  let currentBg = backgroundImage;
  let currentPorte = porteImage;
  let hoverEnabled = true;
  let servanteVisible = false; 

  onMount(() => {
    const images = [backgroundImage, backgroundImage2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });

  function Action() {
    currentPorte = porteImage2;
    hoverEnabled = false;

    setTimeout(() => {
      servanteVisible = true;
    }, 400);
  }
</script>

<style>

  .container-flex {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: end;
    align-items: center; 
    position: absolute;

      opacity: 0; /* invisible au départ */
  transition: opacity 0.5s ease; /* transition fluide */

  }

  /* Classe pour rendre visible */
.container-flex.visible {
  opacity: 1;
}

  .women {
    position: absolute;
    width: 28%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center center;
    z-index: 1;
    transition: transform 0.3s ease;
  }


  .women:hover {
    transform: scale(1.02);
  }

  .porte {
    width: 27.5%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: center center;
    z-index: 0;
    position: absolute;
    transition: transform 0.3s ease;
    top: 5%;
    left: 10%;
    scale: 1.1;
  }

  .porte:not(.no-hover):hover {
    transform: scale(1.05);
  }

</style>

<main>
  <div class="container">
    <!-- Background -->
        {#key currentBg}
      <img src={currentBg} alt="Background" class="fullscreen-background" />
    {/key}

<div class="container-flex {servanteVisible ? 'visible' : ''}">
  <img src={servanteImage} alt="servanteImage" class="women" />
</div>



    <!-- Porte -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
      src={currentPorte}
      alt="porteImage"
      class="porte {hoverEnabled ? '' : 'no-hover'}"
      on:click={Action}
    />

    {#if $textboxVisible}
      <div class="textbox2">
        Sa servante, qui était une fille laborieuse
      </div>
    {/if}
  </div>
</main>
