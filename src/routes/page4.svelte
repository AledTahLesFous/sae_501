<script>
  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page4/bg_4.png';


</script>

<style>


</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

       {#if $textboxVisible}

    <div class="textbox2">Plutôt que de démêler les petits pelotons de filasse qui se rencontraient dans le lin</div>
    {/if}

  </div>
</main>

