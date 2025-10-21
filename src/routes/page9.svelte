<script>
  import { onMount } from 'svelte';
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page9/bg_9.avif';
  import backgroundImage2 from '../backgrounds/page9/bg_9_f2.avif';

  let currentImg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage, backgroundImage2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      currentImg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });
</script>

<style>


  .hitbox {
    width: 35%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
  }
</style>

<main>
  <div class="container">
    <!-- Background -->
      <img src={currentImg} alt="Background" class="fullscreen-background" />

    <!-- Zone cliquable -->
    <a 
      href="#/page10"
      class="hitbox"
      aria-label="Aller à la page 10"
    ></a>

    {#if $textboxVisible}
      <div class="textbox">les nettoyait,</div>
    {/if}
  </div>
</main>
