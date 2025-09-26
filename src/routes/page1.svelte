<script>
  import Back from '../back/1.png';
  import Femme from '../perso/femme.png';

  function handleClick() {
    alert('Tu as cliqué sur la femme !');
  }
</script>

<style>
  .background {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background img {
    width: 100%;
    height: 100%;
    object-fit: fill; /* Garde les proportions sans couper l'image */
    display: block;
  }

  .femme {
    position: absolute;
    top: 66%;
    left: 50%;
    width: 12%; /* Pourcentage basé sur la taille du conteneur */
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 3px solid white;
    background: none;
    padding: 0;
    transform: translate(-50%, -50%);
    transform-origin: center;
  }

  .femme img {
    width: 100%;
    height: auto;
    display: block;
  }

  .femme:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Responsive pour maintenir les proportions */
  @media (max-aspect-ratio: 16/9) {
    .femme {
      width: 15%;
    }
  }

  @media (max-aspect-ratio: 4/3) {
    .femme {
      width: 18%;
    }
  }

  @media (max-width: 768px) {
    .femme {
      width: 20%;
      border: 2px solid white;
    }
  }

  @media (max-width: 480px) {
    .femme {
      width: 25%;
      border: 2px solid white;
    }
  }
</style>

<main>
<div class="background">
  <img src={Back} alt="background" />
  <button class="femme" on:click={handleClick} type="button">
    <img src={Femme} alt="femme" />
  </button>
</div>

</main>
