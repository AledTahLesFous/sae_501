<script>
  import Back from '../back/1.png';
  import Femme from '../perso/femme.png';

  function handleClick() {
    alert('Tu as cliqué sur la femme !');
  }
</script>

<style>
  main {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* Background directement sur le conteneur pour être identique partout */
    background-image: url('../back/1.png');
    background-size: cover; /* Remplit sans déformer */
    background-position: center center;
    background-repeat: no-repeat;
  }

  /* On supprime le wrapper <img> pour éviter les variations de rendu entre navigateurs */

  .femme {
    position: absolute;
    top: 66%;
    left: 50%;
    /* Largeur FIXE (identique sur toutes tailles d'écran) */
    --femme-width: 240px; /* Ajuste cette valeur si besoin */
    width: var(--femme-width);
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 3px solid white;
    background: none;
    padding: 0;
    transform: translate(-50%, -50%);
    transform-origin: center;
    z-index: 2;
  }

  .femme img {
    width: 100%;
    height: auto;
    display: block;
  }

  .femme:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
</style>

<main>
  <button class="femme" on:click={handleClick} type="button">
    <img src={Femme} alt="femme" />
  </button>
</main>
