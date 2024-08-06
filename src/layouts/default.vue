<template>
  <v-app>
    
      <v-main>
        <router-view />
        <v-app-bar :elevation="2">
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer" color="rgb(0, 255, 21)"></v-app-bar-nav-icon>
            <template>
              
                <v-card>
    
      
      <v-main style="height: 250px"></v-main>
  
  </v-card>
            </template>
          </template>
          <v-app-bar-title><div id="color_title">Inicio</div></v-app-bar-title>
        </v-app-bar>
      
        <v-carousel cycle>
        
        <v-carousel-item 
          src="/src/imgs/chameleon.jpeg"
          cover
        ></v-carousel-item>
        
        <v-carousel-item
          src="/src/imgs/crocodiles.jpg"
          cover
        ></v-carousel-item>
        
        <v-carousel-item
          src="/src/imgs/lizard.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="/src/imgs/snake.jpg"
          cover
        ></v-carousel-item>

      </v-carousel>
      <v-navigation-drawer
        v-model="drawer"
        
        theme="dark"
        permanent
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Inicio" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Login/Registro" value="Register"></v-list-item>
          <v-list-item value="Reptile">
            <div class="item-prepend">
              <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
              <v-list-item-title class="item-title">Répteis</v-list-item-title>
            </div>
          </v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Agende" value="travels"></v-list-item>
          <v-list-item prepend-icon="mdi-email" title="Sobre nós" value="about_us"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  
    <AppFooter />
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTextBoxSearchOutline } from '@mdi/js';


  export default {
    name: "tst",
    components: {
    SvgIcon,
  },
    data () {
      
      return {
        drawer: false,
        rail: true,
        path: mdiTextBoxSearchOutline,
        
      }
      library.add(mdiTextBoxSearchOutline);
      
      return{
        
      }
    },
  
  }



</script>

<style scoped>
.item-prepend {
  display: flex;
  align-items: center; /* Alinha verticalmente o ícone e o texto */
}

.icon {
  margin-right: 30px; /* Espaço entre o ícone e o texto */
  display: flex; /* Garantia adicional para o ícone se comportar como um item flexível */
}

.item-title {
  display: flex; /* Garantia adicional para o texto se comportar como um item flexível */
  align-items: center; /* Alinha verticalmente o texto com o ícone */
  
}
</style>

<script lang="ts" setup>


</script>



