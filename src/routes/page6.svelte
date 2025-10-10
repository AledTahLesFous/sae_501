<script>
// @ts-nocheck
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page5/bg_5.avif';
  import womanImage from '../assets/page6/pov.avif'
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
    width: 55%;
    height: 55%;
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
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img src={womanImage} alt="womanImage" class="women"/>
    </div>


    {#if $textboxVisible}
    <div class="textbox">Elle en arrachait des poignées tout entières qu’elle jetait à terre, auprès d’elle.</div>
    {/if}

  </div>
</main>

