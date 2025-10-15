<script>
  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page3/bg_3.avif';
  import backgroundImage2 from '../backgrounds/page3/bg_3_f2.avif';

  let currentBg = backgroundImage;
  let currentText = "Elle s’en acquittait avec tant d’ennui";

  // Quand on clique sur la hitbox
  function handleClick() {
    // Change l'image et le texte
    currentBg = backgroundImage2;
    currentText = "Hmpf";

    // Après 2 secondes, redirige vers /page4
    setTimeout(() => {
      window.location.hash = "#/page4";
    }, 2000);
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
    {#key currentBg}
      <img src={currentBg} alt="Background" class="fullscreen-background" />
    {/key}

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
      <div class="textbox2">{currentText}</div>
    {/if}
  </div>
</main>
