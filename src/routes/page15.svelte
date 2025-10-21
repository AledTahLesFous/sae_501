<script>
// @ts-nocheck

  import { push } from 'svelte-spa-router';

  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page15/bg_15.png';

  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });

  
    function goToPage12() {
    push('/page12');
  }

    export let angle = 35; // angle du faisceau
  export let intensity = 0.6; // opacité globale

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
    width: 25%;
    height: 75%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center center;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .women:hover {
    transform: scale(1.02);
  }

.light-beam {
  position: absolute;
  top: -20%;
  left: 50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  transform: translateX(-50%) rotate(var(--angle));
  background: 
    conic-gradient(
      from 180deg at 50% 0%, 
      rgba(255,255,210,0.0) 0deg,
      rgba(255,255,240,var(--intensity)) 10deg,
      rgba(255,255,240,0.0) 25deg
    );
  filter: blur(40px) brightness(1.4);
  mix-blend-mode: screen;
  opacity: 0.7;
  animation: beamMove 5s ease-in-out infinite alternate;
}

@keyframes beamMove {
  0% {
    transform: translateX(-50%) rotate(calc(var(--angle) - 3deg)) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateX(-50%) rotate(calc(var(--angle) + 3deg)) scale(1.05);
    opacity: 0.9;
  }
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


<div class="light-beam" style="--angle: {angle}deg; --intensity: {intensity};"></div>

    {#if $textboxVisible}
    <div class="textbox">Le soir avant ce grand jour, l'active servante dansait gaiement avec sa robe neuve;</div>
    {/if}

  </div>
</main>

