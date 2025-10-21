<script>

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page16/bg_16.png';

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

  .textbox {
    width: 70%;
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
    <div class="textbox">la future se mit à chanter : “La fillette se fait gloire des restes de mon fuseau."</div>
    {/if}

  </div>
</main>

