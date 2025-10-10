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
    width: 20%;
    height: 40%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: center center;
    z-index: 1;
    scale: 2;
    top: 45%;
    left: 35%;
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
      href="#/page9"
      class="women"
      style="background-image: url({servanteImage})"
      aria-label="Aller à la page 9"
    ></a>

    {#if $textboxVisible}
    <div class="textbox">Ramassait tous ces brins de filasse</div>
    {/if}

  </div>
</main>

