<script>
  import { onMount } from 'svelte';
  import { textboxVisible } from '../stores.js';
  import { fade } from 'svelte/transition';
  import backgroundImage from '../backgrounds/page13/bg_13.avif';
  import BoxImage from '../assets/page13/box.avif';

  let currentBg = backgroundImage;
  let boxVisible = true; // contrôle la visibilité de la boîte

  onMount(() => {
    const images = [backgroundImage];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });

  function handleClick() {
    // Change l'image
    currentBg = backgroundImage;
    // Faire disparaître la boîte
    boxVisible = false;
  }
</script>

<style>
  .box {
    position: absolute;
    width: 5%;
    height: 10%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform-origin: center center;
    transform: scale(0.9);
    z-index: 1;
    top: 65%;
    left: 44%;
    transition: transform 0.3s ease;
  }

  .box:hover {
    transform: scale(1);
  }




</style>

<main>
  <div class="container">
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />

    <div class="container-flex"></div>

    <!-- Boîte avec fade -->
    {#if boxVisible}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div 
        class="box" 
        style="background-image: url({BoxImage})"
        on:click={handleClick}
        aria-label="Changer de vetements"
        transition:fade={{ duration: 400 }}
      ></div>
    {/if}

    {#if $textboxVisible}
      <div class="textbox">Un jeune homme avait demandé la gaspilleuse en mariage</div>
    {/if}
  </div>
</main>
