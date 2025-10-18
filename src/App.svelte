<script>
  import Router from 'svelte-spa-router';
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

  import iconOn from './assets/general/1.svg';
  import iconOff from './assets/general/2.png';

  // @ts-ignore
  import Test from './routes/test.svelte';
  import { textboxVisible } from './stores.js';

  const routes = {
    '/': Page1,
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
    '/test': Test
  };

  function toggleTextbox() {
    textboxVisible.update(v => !v);
  }

let isMuted = false;

function toggleAudio() {

}

</script>

<!-- Bouton global pour cacher/afficher les textbox -->
  <div class="bt-container">
    <div class="bt">
  <button on:click={toggleTextbox} class="hide" aria-label="Toggle Textbox">
    <img src={$textboxVisible ? iconOn : iconOff} alt="Toggle textbox" />
  </button>
      <button on:click={toggleAudio} class="hide" aria-label="Toggle Audio">
      </button>
    </div>
  </div>


<audio id="bg-audio" autoplay loop>
  <source src="/assets/audio/background.mp3" type="audio/mpeg" />
  Ton navigateur ne supporte pas l'audio HTML5.
</audio>
<Router {routes} useHash={true} />
