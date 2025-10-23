<script>
  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page17/bg_17.avif';
  import backgroundImage2 from '../backgrounds/page17/bg_17_f2.avif';


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
    <img src={currentBg} alt="Background" class="fullscreen-background" />
    <div class="container-flex">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    </div>

    {#if $textboxVisible}
    <div class="textbox">Le fiancé lui demanda ce qu'elle voulait dire;</div>
    {/if}

  </div>
</main>

