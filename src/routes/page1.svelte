<script>
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

    background-image: url('../back/1.png');
    background-size: contain;          /* ✅ change "cover" → "contain" */    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .femme {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .femme img {
    width: 150px;
    height: auto;
    border: 1px solid purple;
    transition: transform 0.2s ease-in-out;
  }

  .femme:hover img {
    transform: scale(1.1);
  }
</style>

<main>
  <button class="femme" on:click={handleClick} type="button">
    <img src={Femme} alt="femme" />
  </button>
</main>
