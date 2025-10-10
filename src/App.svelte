<script>
  import Router from 'svelte-spa-router';
  import Page1 from './routes/page1.svelte';
  import Page2 from './routes/page2.svelte';
  import Page3 from './routes/page3.svelte';
  import Page4 from './routes/page4.svelte';
  import Page5 from './routes/page5.svelte';
  import Page6 from './routes/page6.svelte';
  import Page7 from './routes/page7.svelte';

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
