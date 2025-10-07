<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import backgroundImage from '../backgrounds/page2/bg_2.png';

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

        if (rotationsCount >= 6) {
          spinnerVisible = false;
        }
      }
    }

    lastAngle = angle;
  }
</script>


<style>

.textbox {
  width: 750px;
  height: 300px;
  position: absolute;
  z-index: 1;
  top: 2%;
  left: 2%;
  transform-origin: center;
  opacity: 1;
  padding: 50px;
  color: white;
  font-family: 'Deutsch', sans-serif;
  font-size: 25px;
  justify-content: space-around;
}

#spinner {
  position: absolute;
  width: 350px;
  height: 350px;
  border: 6px solid rgb(0, 0, 0, 0.8);
  background-color: rgba(47, 47, 47, 0.23);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  cursor: grab;
  z-index: 2;
  user-select: none;
}

</style>


<main on:mousemove={handleMouseMove}>
  <div class="container">
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />

    <!-- Texte -->
    <div class="textbox">Quand on l’obligeait de filer</div>

    <!-- Spinner -->
    {#if spinnerVisible}
      <div 
        id="spinner"
        style="transform: translate(-50%, -50%) rotate({rotation}deg);">
      </div>
    {/if}
  </div>
</main>

