<script>
  import Back from '../back/1.png';
  import Femme from '../perso/femme.png';

  function handleClick() {
    alert('Tu as cliqué sur la femme !');
  }
</script>

<style>


  main {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.femme {
  position: absolute;
  top: 400px;
  left: 850px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 10px solid white;
  background: none;
  border: 10px solid white;
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
