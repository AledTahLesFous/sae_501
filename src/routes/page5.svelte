<script>
// @ts-nocheck


  import { textboxVisible } from '../stores.js';
  import backgroundImage from '../backgrounds/page5/bg_5.avif';
  import womanImage from '../assets/page5/pov.avif'
  import womanImage2 from '../assets/page5/pov_f2.avif'
  import womanImage3 from '../assets/page5/pov_f3.avif'

  let currentImg = womanImage;
  const images = [womanImage, womanImage2, womanImage, womanImage3];
  let index = 0;
  let compteur = 0;

  function Action() {
    index = (index + 1) % images.length;
    currentImg = images[index];
    compteur++;
    if(compteur==10) {
      window.location.hash = '#/page6';
    }
  }



</script>

<style>
  .container-flex {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-size: cover;
    flex-direction: column;
    justify-content: end;
    align-items: center; 
  }

  .women {
    position: absolute;
    width: 55%;
    height: 55%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center center;
    z-index: 1;
    transition: transform 0.3s ease;
  }


</style>


<main>
  <div class="container">
    <!-- Background -->
    <img src={backgroundImage} alt="Background" class="fullscreen-background" />

    <div class="container-flex">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img src={currentImg} alt="currentImg" class="women" on:click={Action}/>
    </div>


    {#if $textboxVisible}
    <div class="textbox">elle en arrachait des poignées tout entières qu'elle jetait à terre auprès d'elle.</div>
    {/if}

  </div>
</main>

