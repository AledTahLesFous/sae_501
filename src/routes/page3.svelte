<script>
  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page3/bg_3.avif';
  import backgroundImage2 from '../backgrounds/page3/bg_3_f2.avif';

  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage, backgroundImage2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });

</script>


<style>



</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />

       {#if $textboxVisible}

    <div class="textbox2">Elle s’en acquittait avec tant d’ennui</div>
    {/if}

  </div>
</main>

