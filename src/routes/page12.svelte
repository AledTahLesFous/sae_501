<script>
  import { fade } from 'svelte/transition';
  import { push } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page12/bg_12.png';
  import backgroundImage2 from '../backgrounds/page12/bg_12_f2.png';

  let currentBg = backgroundImage2;

  function handleClick() {
    // Change l'image
    currentBg = backgroundImage;
  }
</script>

<style>


  .hitbox {
    width: 39%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 25%;
    cursor: pointer;
    z-index: 10;

  }

  .fullscreen-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


</style>

<main>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="container">
    <!-- Background avec transition fade -->
    {#key currentBg}
      <img 
        src={currentBg} 
        alt="Background" 
        class="fullscreen-background"
        transition:fade={{ duration: 400 }}
      />
    {/key}

    <div class="container-flex">
      <!-- Contenu si nécessaire -->
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="hitbox"
      on:click={handleClick}
      aria-label="Changer de vetements"
    ></div>

    {#if $textboxVisible}
      <div class="textbox">et elle s'en fit faire une jolie robe.</div>
    {/if}
  </div>
</main>
