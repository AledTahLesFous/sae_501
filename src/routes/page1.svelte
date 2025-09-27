<style>
  .container {
    position: absolute;

    width: 100vw;
    height: 100vh;
    background-color: purple;
  }

  .fullscreen-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../back/1.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
  
  .women {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url("../perso/femme.png");
    background-repeat: no-repeat;
    z-index: 1;
    top: 17%;
    left: 6%;


  }
</style>

<main>
  <div class="container">
    <div class="fullscreen-background"></div>

    <div class="women"></div>
  </div>
</main>
