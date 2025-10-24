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
  import Page19 from './routes/page19.svelte';
  import Page20 from './routes/page20.svelte';
  import manuelImage from './assets/general/manual.avif';

  import Home from './routes/home.svelte';
  import Credits from './routes/credits.svelte';
  import { textboxVisible } from './stores.js';

  import iconAudioOn from './assets/general/audio.avif';
  import iconAudioOff from './assets/general/mute.avif';
  import iconText from './assets/general/text2.avif';
  import iconTextOff from './assets/general/text.avif';
  import iconHelp from './assets/general/info.avif';

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
    '/page19': Page19,
    '/page20': Page20,
    '/credits': Credits
  };

  let isMuted = true;
  let isHelp = false;
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

    function toggleHelp() {
      isHelp = !isHelp; 
    }


  // --- Gestion audio ---
  function playPageAudio(path: string) {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
    if (!audio || !audioInitialized) return;

    let pageNumber = 1;
    const match = path.match(/page(\d+)/);
    if (match) pageNumber = parseInt(match[1]);

    audio.src = `${import.meta.env.BASE_URL}voices/vc_${pageNumber}.mp3`;

    if (!isMuted) {
      audio.play().catch(() => {
        console.warn('Impossible de jouer l’audio avant interaction utilisateur');
      });
    }
  
      if (pageNumber === 16) {
      audio.addEventListener('ended', handleAudioEnd);
    }
  }

function handleAudioEnd() {
  const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
  if (!audio) return;

  // Assure-toi de stopper le son actuel avant de changer la source
  audio.pause();

  // Met à jour la source avec le chemin dynamique (compatible GitHub Pages)
  audio.src = `${import.meta.env.BASE_URL}voices/song.mp3`;

  // Prépare la lecture avant le play pour réduire la latence
  audio.preload = 'auto';
  audio.load();

  // Active la boucle si tu veux une musique d’ambiance continue
  audio.loop = true;

  // Lance la lecture (bloquée par défaut si pas d’interaction)
  audio.play().catch(() => {
    console.warn('Lecture automatique bloquée — une interaction utilisateur est nécessaire.');
  });
}


  // --- Navigation clavier ---
  const pageOrder = [
    '/', '/page1', '/page2', '/page3', '/page4', '/page5', '/page6', '/page7',
    '/page8', '/page9', '/page10', '/page11', '/page12', '/page13', '/page14',
    '/page15', '/page16', '/page17', '/page18', '/page19', '/page20', '/credits'
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
{#if currentPath !== '/' && currentPath !== '/credits'}
  <div class="bt-container">
    <div class="bt">
      <button on:click={toggleTextbox} class="hide" aria-label="Toggle Textbox">
        <img src={$textboxVisible ? iconText : iconTextOff} alt="Toggle textbox" />
      </button>
      <button on:click={toggleAudio} class="hide" aria-label="Toggle Audio">
        <img src={!isMuted  ? iconAudioOn : iconAudioOff} alt="Toggle Audio" />
      </button>
      <button on:click={toggleHelp} class="hide" aria-label="Toggle Help">
        <img src={!isHelp  ? iconHelp : iconHelp} alt="Toggle Help" />
      </button>
    </div>
  </div>

   <div class="tablet-nav">
    <button class="nav-btn prev" on:click={() => navigatePage(-1)} aria-label="Page précédente">‹</button>
    <button class="nav-btn next" on:click={() => navigatePage(1)} aria-label="Page suivante">›</button>
  </div>

  
<!-- 🆕 Overlay manuel -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if isHelp}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="help-overlay" on:click={toggleHelp}>
    <img src={manuelImage} alt="Manuel d'aide" class="manuel-image" />
  </div>
{/if}

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
