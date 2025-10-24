<script>
  // Quand on clique sur le bouton
  function startStory() {
    // Redirige vers la première page du conte
    window.location.hash = "#/home";
  }
</script>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(circle at center, #f9f4ef 0%, #d6cfc6 100%);
    font-family: 'Georgia', serif;
  }

  button {
    background-color: #4b2e83;
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
    background-color: #5d3ea8;
    transform: scale(1.05);
  }
</style>

<main>
  <button on:click={startStory}>Retour au début</button>
</main>
