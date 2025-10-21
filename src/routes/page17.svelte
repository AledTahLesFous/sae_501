<script>

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page17/bg_17.png';

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
    <div class="textbox">Le fiancé lui demanda ce qu'elle voulait dire;</div>
    {/if}

  </div>
</main>

