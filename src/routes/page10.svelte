<script>

  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page10/bg_10.png';
  import servanteImage from '../assets/page10/servante.png';

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

  .container-flex {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-size: cover;
    flex-direction: column;
    justify-content: end;
    align-items: center; 
  }

  .women {
    position: absolute;
    width: 45%;
    height: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center center;
    z-index: 1;
    transition: transform 0.3s ease;
  }

</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />
    <div class="container-flex">
            <img src={servanteImage} alt="servanteImage" class="women"/>

    </div>



    {#if $textboxVisible}
    <div class="textbox">Plutôt que de démêler les petits pelotons de filasse qui se rencontraient dans le lin</div>
    {/if}

  </div>
</main>

