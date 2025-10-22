<script>
  import { onMount } from 'svelte';

  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page2/bg_2.png';
  import backgroundImage2 from '../backgrounds/page2/bg_2_f2.png';

  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage, backgroundImage2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 300);

    return () => clearInterval(interval);
  });

  // Spinner
  let spinnerVisible = true;
  let rotation = 0; // angle du spinner
  let lastAngle = null;
  let rotationsCount = 0;

  function handleMouseMove(event) {
    if (!spinnerVisible) return;

    const circle = document.getElementById('spinner');
    const rect = circle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // angle en degrés

    if (lastAngle !== null) {
      let delta = angle - lastAngle;

      // Correction pour rotation continue
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      rotation += delta;

      // Compte les tours complets
      if (Math.abs(rotation) >= 360) {
        rotationsCount += Math.floor(Math.abs(rotation) / 360);
        rotation = rotation % 360;

        if (rotationsCount >= 3) {
          spinnerVisible = false;
            setTimeout(() => {
            window.location.hash = '#/page3';
        }, 1000);
        }
      }
    }

    lastAngle = angle;
  }
</script>


<style>
#spinner {
  position: absolute;
  width: 30%;
  aspect-ratio: 1/1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  cursor: grab;
  z-index: 2;
  user-select: none;
}

.arrow {
  position: absolute;
  width: 3%;
  height: 4%;
  background-color: white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.arrow:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.arrow:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%) rotate(90deg); }
.arrow:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%) rotate(180deg); }
.arrow:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%) rotate(270deg); }
</style>


<main on:mousemove={handleMouseMove}>
  <div class="container">
    <!-- Background -->
      <img src={currentBg} alt="Background" class="fullscreen-background" />
    <!-- Texte -->
       {#if $textboxVisible}
    <div class="textbox">Quand on l'obligeait de filer,</div>
  {/if}
    <!-- Spinner -->
    {#if spinnerVisible}
<div id="spinner" style="transform: translate(-50%, -50%) rotate({rotation}deg);">
  <div class="arrow"></div>
  <div class="arrow"></div>
  <div class="arrow"></div>
  <div class="arrow"></div>
</div>
    {/if}
  </div>
</main>

