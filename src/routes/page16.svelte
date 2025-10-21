<script>
// @ts-nocheck

  import { push } from 'svelte-spa-router';

  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page16/bg_16.png';

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

  
    function goToPage12() {
    push('/page12');
  }

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
    width: 25%;
    height: 75%;
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

</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />
    <div class="container-flex">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    </div>

    {#if $textboxVisible}
    <div class="textbox">La future se mit à chanter : “La fillette se fait gloire des restes de mon fuseau.</div>
    {/if}

  </div>
</main>

