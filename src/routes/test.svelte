<script>

  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page8/bg_8.avif';
  import servanteImage from '../assets/page8/servante.avif';

  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage];
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


</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

  <a 
      href="#/page9"
      class="women"
      style="background-image: url({servanteImage})"
      aria-label="Aller à la page 9"
    ></a>

    {#if $textboxVisible}
    <div class="textbox2">Plutôt que de démêler les petits pelotons de filasse qui se rencontraient dans le lin</div>
    {/if}

  </div>
</main>

