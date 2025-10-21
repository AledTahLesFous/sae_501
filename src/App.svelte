<script lang="ts">
  import Router from 'svelte-spa-router';
  import { onMount, onDestroy } from 'svelte';
  import Page1 from './routes/page1.svelte';
  import Page2 from './routes/page2.svelte';
  import Page3 from './routes/page3.svelte';
  import Page4 from './routes/page4.svelte';
  import Page5 from './routes/page5.svelte';
  import Page6 from './routes/page6.svelte';
  import Page7 from './routes/page7.svelte';
  import Page8 from './routes/page8.svelte';
  import Page9 from './routes/page9.svelte';
  import Page10 from './routes/page10.svelte';
  import Page11 from './routes/page11.svelte';
  import Page12 from './routes/page12.svelte';
  import Page13 from './routes/page13.svelte';
  import Page14 from './routes/page14.svelte';
  import Page15 from './routes/page15.svelte';
  import Page16 from './routes/page16.svelte';
  import Page17 from './routes/page17.svelte';
  import Page18 from './routes/page18.svelte';
  import Home from './routes/home.svelte';
  import Test from './routes/test.svelte';
  import { textboxVisible } from './stores.js';

  import iconOn from './assets/general/1.svg';
  import iconOff from './assets/general/2.png';

  const routes = {
    '/': Home,
    '/page1': Page1,
    '/page2': Page2,
    '/page3': Page3,
    '/page4': Page4,
    '/page5': Page5,
    '/page6': Page6,
    '/page7': Page7,
    '/page8': Page8,
    '/page9': Page9,
    '/page10': Page10,
    '/page11': Page11,
    '/page12': Page12,
    '/page13': Page13,
    '/page14': Page14,
    '/page15': Page15,
    '/page16': Page16,
    '/page17': Page17,
    '/page18': Page18,
    '/test': Test
  };

  let isMuted = true;
  let audioInitialized = false;
  let currentPath = '/'; // pour savoir où on est

  // --- Fonctions UI ---
  function toggleTextbox() {
    textboxVisible.update(v => !v);
  }

  function toggleAudio() {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
    if (!audio) return;

    if (!audioInitialized) {
      audioInitialized = true;
      playPageAudio(window.location.hash.replace('#', '') || '/');
    }

    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    isMuted = !isMuted;
  }

  // --- Gestion audio ---
  function playPageAudio(path: string) {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
    if (!audio || !audioInitialized) return;

    let pageNumber = 1;
    const match = path.match(/page(\d+)/);
    if (match) pageNumber = parseInt(match[1]);

    audio.src = `/src/voices/vc_${pageNumber}.mp3`;

    if (!isMuted) {
      audio.play().catch(() => {
        console.warn('Impossible de jouer l’audio avant interaction utilisateur');
      });
    }
  }

  // --- Navigation clavier ---
  const pageOrder = [
    '/', '/page1', '/page2', '/page3', '/page4', '/page5', '/page6', '/page7',
    '/page8', '/page9', '/page10', '/page11', '/page12', '/page13', '/page14',
    '/page15', '/page16', '/page17', '/page18'
  ];

  function navigatePage(offset: number) {
    const hash = window.location.hash.replace('#', '') || '/';
    const idx = pageOrder.indexOf(hash);
    if (idx === -1) return;

    let newIdx = idx + offset;
    if (newIdx < 0) newIdx = 0;
    if (newIdx >= pageOrder.length) newIdx = pageOrder.length - 1;

    window.location.hash = pageOrder[newIdx];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') navigatePage(-1);
    else if (event.key === 'ArrowRight') navigatePage(1);
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });

  // --- Suivi de la route courante ---
  function updateCurrentPath(path: string) {
    currentPath = path;
  }
</script>

<!-- ✅ Les boutons ne s’affichent pas sur la home -->
{#if currentPath !== '/'}
  <div class="bt-container">
    <div class="bt">
      <button on:click={toggleTextbox} class="hide" aria-label="Toggle Textbox">
        <img src={$textboxVisible ? iconOn : iconOff} alt="Toggle textbox" />
      </button>
      <button on:click={toggleAudio} class="hide" aria-label="Toggle Audio">
        <img src={$textboxVisible ? iconOn : iconOff} alt="Toggle textbox" />
      </button>
    </div>
  </div>
{/if}

<audio id="bg-audio">
  Ton navigateur ne supporte pas l'audio HTML5.
</audio>

<Router
  {routes}
  useHash={true}
  on:routeLoaded={(e) => {
    const path = e.detail.location;
    updateCurrentPath(path);
    playPageAudio(path);
  }}
/>
