<script>

   import manuelImage from '../assets/general/manual.avif';
     let isHelp = false;


  // Quand on clique sur le bouton
  function startStory() {
    // Redirige vers la première page du conte
    window.location.hash = "#/page1";
  }

    function toggleHelp() {
    isHelp = !isHelp; 
  }

</script>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    height: 100vh;
    background: radial-gradient(circle at center, #f9f4ef 0%, #d6cfc6 100%);
  }

  button {
    font-family: 'Land', sans-serif;
    background-color: #ddc577;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }

  button:hover {
    background-color: #74683f;
    transform: scale(1.05);
  }
</style>

<main>
  <button on:click={startStory}>Lancer le conte</button>
  <button on:click={toggleHelp}>Notice Explicative</button>

  {#if isHelp}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="help-overlay" on:click={toggleHelp}>
    <img src={manuelImage} alt="Manuel d'aide" class="manuel-image" />
  </div>
{/if}
</main>
