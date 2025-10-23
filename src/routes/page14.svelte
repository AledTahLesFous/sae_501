<script>

  import { push } from 'svelte-spa-router';
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page14/bg_14.avif';
  import backgroundImage2 from '../backgrounds/page14/bg_14_f2.avif';

  const images = [ backgroundImage, backgroundImage2];


  let currentBg = images[0];
  let clickCount = 0;

function handleClick() {
    clickCount++;

      const audio = new Audio(`${import.meta.env.BASE_URL}voices/toc.mp3`);
  audio.play().catch(() => {
    console.warn('Lecture automatique bloquée, interaction requise.');
  });

    // alterne entre les deux images
    currentBg = images[clickCount % 2];

    // au 8e clic → passage à la page 15
    if (clickCount >= 8) {
      push('/page15');
    }
  }

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
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="container" on:click={handleClick}>
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />
    <div class="container-flex">

    </div>

    {#if $textboxVisible}
    <div class="textbox">et la noce allait se faire.</div>
    {/if}

  </div>
</main>

