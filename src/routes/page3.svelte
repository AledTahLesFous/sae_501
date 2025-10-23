<script>
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page3/bg_3.avif';
  import backgroundImage2 from '../backgrounds/page3/bg_3_f2.avif';

  let currentBg = backgroundImage;

  // Quand on clique sur la hitbox
  function handleClick() {
    // Change l'image et le texte
    currentBg = backgroundImage2;

    // Jouer le son vc_3_2
    const audio = new Audio('/voices/vc_3_2.mp3');
    audio.play().catch(err => {
      console.warn('Impossible de jouer l’audio avant interaction utilisateur');
    });


  }
</script>

<style>
  .hitbox {
    width: 35%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 20%;
    cursor: pointer;
    z-index: 10;
  }
</style>

<main>
  <div class="container">
    <!-- Image de fond -->
      <img src={currentBg} alt="Background" class="fullscreen-background" />

    <!-- Zone cliquable -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="hitbox"
      on:click={handleClick}
      aria-label="Aller à la page 4"
    ></div>

    <!-- Texte -->
    {#if $textboxVisible}
      <div class="textbox2">elle s'en acquittait avec tant d'ennui,</div>
    {/if}
  </div>
</main>
