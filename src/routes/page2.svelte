<script>
  import { onMount } from 'svelte';

  import backgroundImage from '../backgrounds/page2/bg_2.png';


  let currentBg = backgroundImage;

  onMount(() => {
    const images = [backgroundImage];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      currentBg = images[index];
    }, 700);

    return () => clearInterval(interval);
  });
</script>

<style>



.textbox {
  width: 750px;
  height: 300px;
  position: absolute;
  z-index: 1;
  top: 2%;
  left: 2%;
  transform-origin: center;
  opacity: 1;
  padding: 50px;
  color: white;
  font-family: 'Deutsch', sans-serif;
  font-size: 25px;
  justify-content: space-around;
}



</style>

<main>
  <div class="container">
    <!-- Background -->
    <img src={currentBg} alt="Background" class="fullscreen-background" />


  
    <div class="textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non molestie nibh. Aenean quis semper lacus, quis finibus enim.</div>

    <div class="bt">
      <div class="hidetext"></div>
    </div>
  </div>
</main>
