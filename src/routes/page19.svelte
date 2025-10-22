<script>

  import { push } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page19/bg_19.png';

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
    width: 38%;
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
    <div class="textbox">Le jeune homme apprenant cela, et voyant la nonchalance de l’une et l’activité de l’autre… laissa là sa fiancée.</div>
    {/if}

  </div>
</main>

