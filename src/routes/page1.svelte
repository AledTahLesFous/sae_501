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
    width: clamp(80px, 8vw, 150px); /* Taille responsive avec limites min/max */
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
    border: clamp(2px, 0.3vw, 5px) solid white; /* Bordure responsive avec limites */
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
</style>

<main>
<div class="background">
  <img src={Back} alt="background" />
  <button class="femme" on:click={handleClick} type="button">
    <img src={Femme} alt="femme" />
  </button>
</div>

</main>
