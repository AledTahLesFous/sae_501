<script>
// @ts-nocheck


  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page5/bg_5.png';
  import womanImage from '../assets/page5/pov.png'

  function Test() {
    console.log("Helo")
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
    width: 53%;
    height: 30%;
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
    <img src={womanImage} alt="womanImage" class="women" on:click={Test}/>
    </div>


    {#if $textboxVisible}
    <div class="textbox">Elle en arrachait des poignées tout entières qu’elle jetait à terre, auprès d’elle.</div>
    {/if}

  </div>
</main>

