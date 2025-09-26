<script>
  import Back from '../back/1.png';
  import Femme from '../perso/femme.png';

  function handleClick() {
    alert('Tu as cliqué sur la femme !');
  }
</script>

<style>

  .background {
  position: relative; /* clé pour que .femme soit positionnée par rapport à l'image */    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .background img {
    width: 100%;
    height: 100%;
  }

.femme {
  position: absolute;
  top: 44%;
  left: 44%;
  width: 15vw; /* Largeur relative à la viewport */
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 10px solid white;
  background: none;
  padding: 0;
  transform-origin: center;
}

.femme img {
  width: 100%;
  height: auto;
  display: block;
}

  .femme:hover {
    transform: scale(1.1);
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
