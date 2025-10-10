<script>

  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page9/bg_9.avif';
  import servanteImage from '../assets/page9/servante.avif';

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
    z-index: 1;
    scale: 1.5;
    top: 18.5%;
    left: 36%;
    transition: transform 0.3s ease;
  }

  .women:hover {
    transform: scale(1.05);
  }


</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

  <a 
      href="#/page10"
      class="women"
      style="background-image: url({servanteImage})"
      aria-label="Aller à la page 10"
    ></a>

    {#if $textboxVisible}
    <div class="textbox">Les nettoyait</div>
    {/if}

  </div>
</main>

