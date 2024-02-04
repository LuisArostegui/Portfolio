<template>
  <header class="header">
    <div class="header__container">
        <div class="header__photo-container">
          <div class="photo-shadow"></div>
          <img src="../assets/LuisArostegui.jpg" alt="My photo" />
        </div>

        <div class="header__text-container">

          <h1 class="heading-primary">
            <span class="heading-primary-saludation">Hello I'm</span>
            <span class="heading-primary--main">Luis Arostegui Ruiz</span>
            <span class="heading-primary--sub">SOFTWARE DEVELOPER</span>
          </h1>

          <h2 class="heading-secondary">
            <span class="heading-secondary--main">SOFTWARE DEVELOPER</span>
          </h2>

          <div class="introduction">
            <p class="presentation">
              Consectetur minim veniam eu ex excepteur irure nostrud in velit. In amet esse consectetur esse labore elit deserunt enim non ut elit esse laboris excepteur. 
              Nisi eiusmod officia consequat cupidatat anim laboris. Nisi aliqua ea culpa nisi.

              Dolor proi dent cupidatat esse officia consectetur officia pariatur nulla qui in fugiat ipsum esse. 
              Commodo dolor laboris ut eu sunt aliquip adipisicing Lorem sunt minim aliquip culpa quis. Commodo do proident officia 
              eiusmod tempor duis qui enim reprehenderit sunt ullamco laborum aliquip. Veniam ut adipisicing sint excepteur non eiusmod. 
              Eiusmod deserunt amet proident sint qui dolore laborum. Adipisicing ad deserunt dolor nulla est cillum consectetur reprehenderit nisi
               mollit duis voluptate deserunt est.
            </p>
          </div>

          <div class="icon-links">
            <!-- Enlace 1 -->
            <a href="enlace1.com" target="_blank">
              <img src="../assets/linkedin-4-32.png" alt="Icono 1" />
            </a>

            <!-- Enlace 2 -->
            <a href="enlace2.com" target="_blank">
              <img src="../assets/github-10-32.png" alt="Icono 2" />
            </a>
          </div>
        </div>

    </div>
  </header>

</template>


<script>
export default {
  name: 'IntroductionComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('../styles/components/_introduction.scss');
</style>