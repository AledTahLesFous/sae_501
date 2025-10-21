<script>
// @ts-nocheck
import { push } from 'svelte-spa-router';
import { onMount } from 'svelte';
import { textboxVisible } from '../stores.js';
import backgroundImage from '../backgrounds/page15/bg_15.png';

let currentBg = backgroundImage;
let currentBeamIndex = 0;
let currentBeamIndex2 = 0;
let currentBeamIndex3 = 0;
let currentBeamIndex4 = 0;


const beamFrames = [
  { angle: 27, intensity: 0.45, offsetX: 500 },
  { angle: 24, intensity: 0.35, offsetX: 500 },
];

const beamFrames2 = [
  { angle: -31, intensity: 0.45, offsetX: -500 },
  { angle: -28, intensity: 0.55, offsetX: -500 },
];

const beamFrames3 = [
  { angle: 10, intensity: 0.45, offsetX: 5 },
  { angle: 15, intensity: 0.35, offsetX: 5 },
];




onMount(() => {
  const interval = setInterval(() => {
    currentBeamIndex = (currentBeamIndex + 1) % beamFrames.length;
  }, 1000);

  const interval2 = setInterval(() => {
    currentBeamIndex2 = (currentBeamIndex2 + 1) % beamFrames2.length;
  }, 1500);

  const interval3 = setInterval(() => {
    currentBeamIndex3 = (currentBeamIndex3 + 1) % beamFrames3.length;
  }, 2200);

  const interval4 = setInterval(() => {
    currentBeamIndex4 = (currentBeamIndex4 + 1) % beamFrames4.length;
  }, 1375);
  return () => clearInterval(interval, interval2, interval3, interval4);
});
</script>

<style>
.women {
  position: absolute;
  width: 25%;
  height: 75%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: center center;
  z-index: 1;
}

.women:hover {
  transform: scale(1.02);
}

/* --- Rayon de lumière --- */
.light-beam {
  position: absolute;
  top: -20%;
  left: 50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  mix-blend-mode: screen;
  background: conic-gradient(
    from 180deg at 50% 0%,
    rgba(255, 255, 210, 0.0) 0deg,
    rgba(255, 255, 240, var(--intensity)) 10deg,
    rgba(255, 255, 240, 0.0) 25deg
  );
  filter: blur(40px) brightness(1.4);
  opacity: 0.8;
  /* ⚠️ Pas de transition => frame cut net */
  transition: none;
}

.fullscreen-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>

<main>
  <div class="container">
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

    <!-- Frame du faisceau -->
    <div
      class="light-beam"
      style="
        --angle: {beamFrames[currentBeamIndex].angle}deg;
        --intensity: {beamFrames[currentBeamIndex].intensity};
        transform: translateX(calc(-50% + {beamFrames[currentBeamIndex].offsetX}px))
                   rotate({beamFrames[currentBeamIndex].angle}deg);
      "
    ></div>

        <div
      class="light-beam"
      style="
        --angle: {beamFrames2[currentBeamIndex2].angle}deg;
        --intensity: {beamFrames2[currentBeamIndex2].intensity};
        transform: translateX(calc(-50% + {beamFrames2[currentBeamIndex2].offsetX}px))
                   rotate({beamFrames2[currentBeamIndex2].angle}deg);
      "
    ></div>

            <div
      class="light-beam"
      style="
        --angle: {beamFrames3[currentBeamIndex3].angle}deg;
        --intensity: {beamFrames3[currentBeamIndex3].intensity};
        transform: translateX(calc(-50% + {beamFrames3[currentBeamIndex3].offsetX}px))
                   rotate({beamFrames3[currentBeamIndex3].angle}deg);
      "
    ></div>



    {#if $textboxVisible}
      <div class="textbox">
        Le soir avant ce grand jour, l'active servante dansait gaiement avec sa robe neuve;
      </div>
    {/if}
  </div>
</main>
