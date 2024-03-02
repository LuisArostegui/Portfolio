<template>
  <header class="header">
    <div class="header__container">
        <div class="header__photo-container">
          <div class="photo-shadow"></div>
          <img src="../assets/LuisArostegui.jpg" alt="My photo" />
        </div>

        <div class="header__text-container">

          <h1 class="heading-primary">
            <span class="heading-primary__salutation">Hello I'm</span>
            <span class="heading-primary__main">Luis Arostegui Ruiz</span>
            <span class="heading-primary__sub">Full Stack Developer</span>
          </h1>

          <Separator
            color="primary"
            thickness="2px"
            :customStyle="{ margin: 'auto', marginBottom: '2rem', marginTop: '2rem', width: '80%' }"
          />

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

          <Button text="About me" :customStyle="{ margin: 'auto', marginBottom: '2rem', marginTop: '2rem' }" iconClass="icon-download" />
        </div>

    </div>
  </header>

</template>


<script>
import SeparatorComponent from './elements/Separator.vue';
import ButtonComponent from './elements/Button.vue';

export default {
  name: 'IntroductionComponent',
  components: {
    Separator: SeparatorComponent,
    Button: ButtonComponent
  }
}
</script>

<style scoped lang="scss">
@import url('../styles/components/_introduction.scss');
</style>