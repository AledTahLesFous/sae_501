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
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .background img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
  }

  .femme {
    position: absolute;
    top: 66%;
    left: 50%;
    height: auto;
    width: auto;
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
    height: 100%;
    width: auto;
    display: block;
  }

  .femme:hover {
    transform: translate(-50%, -50%) scale(1.1);
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
