<script>
  import Back from '../back/1.png';
  import Femme from '../perso/femme.png';

  function handleClick() {
    alert('Tu as cliqué sur la femme !');
  }
</script>

<style>

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .background img {
    width: 100%;
    height: 100%;
    object-fit: fill; /* cover = remplissage sans déformation visible */
  }

  .femme {
    position: absolute;
    top: 33%;
    left: 44%;
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 10px solid white;
    background: none;
    padding: 0;
  }

  .femme:hover {
    transform: scale(1.1);
  }
</style>

<main>
  <div class="background">
    <img src={Back} alt="background" />
  </div>

  <button class="femme" on:click={handleClick} type="button">
    <img src={Femme} alt="femme" />
  </button>
</main>
